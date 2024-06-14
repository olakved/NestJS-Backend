import { BadRequestException, Injectable } from "@nestjs/common";
import {
  CreateUserDTO,
  ForgetPasswordDTO,
  LoginUserDTO,
  ResetPasswordDTO,
  UserDto,
} from "./dto/auth.dto";
import { AuthFinder } from "./authFinder.service";
import { PrismaService } from "src/prisma/prisma.service";
import { IRole, IStatus } from "src/types/appModel.type";
import { PasswordService } from "./password.service";

@Injectable()
export class AuthService {
  private timeGenerated: string;
  constructor(
    private authFinder: AuthFinder,
    private prisma: PrismaService,
    private passwordService: PasswordService,
  ) {
    this.timeGenerated = new Date().toISOString();
  }

  async getUserById(
    id: string,
  ): Promise<{ message: string; data: { user: UserDto } }> {
    // Find user by ID
    const foundUserWithId = await this.prisma.appUsers.findUnique({
      where: { id },
    });

    // Handle user not found
    if (!foundUserWithId) {
      throw new BadRequestException("User with id does not exist");
    }

    // Convert found user to UserDto
    return {
      message: "User found successfully",
      data: {
        user: foundUserWithId,
      },
    };
  }

  async getAllUsers() {
    const foundAllUsers = await this.prisma.appUsers.findMany();

    const userObject = foundAllUsers.length > 0 ? foundAllUsers : [];

    return {
      message: "All users fetched successfully",
      data: {
        users: userObject,
      },
    };
  }

  async createUsers(dto: CreateUserDTO) {
    const { email, phone_number } = dto;

    const foundUserWithEmail = await this.authFinder.findAppUserWithField(
      "email",
      email,
    );

    if (foundUserWithEmail) {
      throw new BadRequestException("Email already exists");
    }

    const foundUserWithPhone = await this.authFinder.findAppUserWithField(
      "phone_number",
      phone_number,
    );

    if (foundUserWithPhone) {
      throw new BadRequestException("Phone number already exists");
    }

    const hashPassword = await this.passwordService.hashPassword(dto.password);

    const createAUser = await this.prisma.appUsers.create({
      data: {
        email: dto.email,
        firstname: dto.firstname,
        lastname: dto.lastname,
        password: hashPassword,
        phone_number: dto.phone_number,
        role: dto.role as IRole,
        createdAt: this.timeGenerated,
      },
    });

    if (!createAUser) {
      throw new BadRequestException("Cannot create user at the moment");
    }
    return {
      message: "User created successfully",
    };
  }

  async LoginUser(dto: LoginUserDTO) {
    const { email, password } = dto;
    const foundUserWithEmail = await this.authFinder.findAppUserWithField(
      "email",
      email,
    );

    if (!foundUserWithEmail) {
      throw new BadRequestException("User with email not found");
    }

    const isMatch = this.passwordService.validatePassword(
      password,
      foundUserWithEmail.password,
    );

    if (!isMatch) {
      throw new BadRequestException("Incorrect password");
    }

    if (
      foundUserWithEmail.status === "inactive" ||
      (foundUserWithEmail.status === "deleted" && !foundUserWithEmail.isActive)
    ) {
      throw new BadRequestException(
        "your account is inactive, contact the administrator",
      );
    }

    await this.authFinder.findAppUserWithFieldAndUpdate(
      "email",
      foundUserWithEmail.email,
      {
        lastLogin: this.timeGenerated,
      },
    );

    return {
      message: "User logged in successfully",
      userDetail: foundUserWithEmail,
    };
  }

  async ForgetPassword(dto: ForgetPasswordDTO) {
    const { email } = dto;

    const foundUserWithEmail = await this.authFinder.findAppUserWithField(
      "email",
      email,
    );

    if (!foundUserWithEmail) {
      throw new BadRequestException("User with email does not exist");
    }

    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();

    await this.authFinder.findAppUserWithFieldAndUpdate(
      "email",
      foundUserWithEmail.email,
      {
        otpCode: otpCode,
      },
    );

    return {
      message: "Check your email for the OTP.",
      data: {
        otpCode: otpCode,
      },
    };
  }

  async ResetPassword(dto: ResetPasswordDTO) {
    const { email, otpCode, new_password } = dto;

    const foundUserWithEmail = await this.authFinder.findAppUserWithField(
      "email",
      email,
    );

    if (!foundUserWithEmail) {
      throw new BadRequestException("User with email does not exist");
    }

    if (!foundUserWithEmail) {
      throw new BadRequestException("User with email not found");
    }

    if (foundUserWithEmail.otpCode !== otpCode) {
      throw new BadRequestException("Incorrect OTP code");
    }

    await this.authFinder.findAppUserWithFieldAndUpdate(
      "email",
      foundUserWithEmail.email,
      {
        otpCode: null,
        password: new_password,
        updatedAt: this.timeGenerated,
      },
    );

    return {
      message: "Password reset successfully",
    };
  }

  async ActivateUser(id: string) {
    const foundUserWithId = await this.authFinder.findAppUserWithField(
      "id",
      id,
    );

    if (!foundUserWithId) {
      throw new BadRequestException("User with id not found");
    }

    if (foundUserWithId.status === "active" && foundUserWithId.isActive) {
      throw new BadRequestException(
        "User is already active, you cannot perform this action",
      );
    }

    const dataToUpdate = {
      status: "active" as IStatus,
      isActive: true,
    };

    const updatedUser = await this.authFinder.findAppUserWithFieldAndUpdate(
      "id",
      foundUserWithId.id,
      dataToUpdate,
    );

    if (!updatedUser) {
      throw new BadRequestException("Cannot activate user at the moment");
    }

    return {
      message: "User activated successfully",
    };
  }

  async DeactivateUser(id: string) {
    const foundUserWithId = await this.authFinder.findAppUserWithField(
      "id",
      id,
    );

    if (!foundUserWithId) {
      throw new BadRequestException("User with id not found");
    }

    if (foundUserWithId.status === "inactive" && !foundUserWithId.isActive) {
      throw new BadRequestException(
        "User is already inactive, you cannot perform this action",
      );
    }

    const dataToUpdate = {
      status: "inactive" as IStatus,
      isActive: false,
    };

    const updatedUser = await this.authFinder.findAppUserWithFieldAndUpdate(
      "id",
      foundUserWithId.id,
      dataToUpdate,
    );

    if (!updatedUser) {
      throw new BadRequestException("Cannot deactivate user at the moment");
    }

    return {
      message: "User deactivated successfully",
    };
  }

  async DeleteUserTemp(id: string) {
    const foundUserWithId = await this.authFinder.findAppUserWithField(
      "id",
      id,
    );

    if (!foundUserWithId) {
      throw new BadRequestException("User with id not found");
    }

    if (foundUserWithId.status === "deleted" && !foundUserWithId.isDeleted) {
      throw new BadRequestException(
        "User is already deleted, you cannot perform this action",
      );
    }

    const dataToUpdate = {
      status: "deleted" as IStatus,
      isActive: false,
    };

    const updatedUser = await this.authFinder.findAppUserWithFieldAndUpdate(
      "id",
      foundUserWithId.id,
      dataToUpdate,
    );

    if (!updatedUser) {
      throw new BadRequestException("Cannot delete user at the moment");
    }

    return {
      message: "User deleted successfully",
    };
  }

  async DeleteUserPerm(id: string) {
    const foundUserWithId = await this.authFinder.findAppUserWithField(
      "id",
      id,
    );

    if (!foundUserWithId) {
      throw new BadRequestException("User with id not found");
    }

    const deletedUser = await this.authFinder.findAppUserWithFieldAndDelete(
      "id",
      foundUserWithId.id,
    );

    if (!deletedUser) {
      throw new BadRequestException("Cannot delete user at the moment");
    }

    return {
      message: "User deleted successfully",
    };
  }
}
