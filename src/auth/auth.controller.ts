import {
  Controller,
  Body,
  Post,
  Get,
  Delete,
  Param,
  UseInterceptors,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import {
  ApiBody,
  ApiTags,
  ApiParam,
  ApiOperation,
  ApiResponse,
} from "@nestjs/swagger";
import { ResponseInterceptor } from "src/filter/respone.service";
import {
  CreateUserDTO,
  ForgetPasswordDTO,
  IGetSingleUser,
  LoginUserDTO,
  ResetPasswordDTO,
  UserDto,
} from "./dto/auth.dto";

@Controller("auth")
@ApiTags("Auth")
@UseInterceptors(ResponseInterceptor)
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get("/user/:id")
  @ApiParam({ name: "id", required: true, type: String })
  @ApiOperation({ summary: "Get Single user" })
  @ApiResponse({
    description: "Return single user",
    type: IGetSingleUser,
  })
  async getUserById(@Param("id") id: string) {
    return await this.authService.getUserById(id);
  }

  @Get("/users")
  @ApiOperation({ summary: "Get all users" })
  @ApiResponse({
    description: "Return all users",
    type: [UserDto],
  })
  async getAllUsers() {
    return await this.authService.getAllUsers();
  }

  @Post("/create/user")
  @ApiOperation({ summary: "Create single user" })
  @ApiBody({ type: CreateUserDTO })
  async createUsers(@Body() dto) {
    return await this.authService.createUsers(dto);
  }

  @Post("/login")
  @ApiOperation({ summary: "login" })
  @ApiBody({ type: LoginUserDTO })
  async loginUser(@Body() dto) {
    return await this.authService.LoginUser(dto);
  }

  @Post("/forgetPassword")
  @ApiOperation({ summary: "start password reset process" })
  @ApiBody({ type: ForgetPasswordDTO })
  async forgetPassword(@Body() dto) {
    return await this.authService.ForgetPassword(dto);
  }

  @Post("/resetPassword")
  @ApiOperation({ summary: "complete password reset process" })
  @ApiBody({ type: ResetPasswordDTO })
  async resetPassword(@Body() dto) {
    return await this.authService.ResetPassword(dto);
  }

  @Post("/activateUser/:id")
  @ApiOperation({ summary: "activate single user" })
  @ApiParam({ name: "id", required: true, type: String })
  async activateUser(@Param("id") id: string) {
    return await this.authService.ActivateUser(id);
  }

  @Post("/deactivateUser/:id")
  @ApiOperation({ summary: "deactivate single user" })
  @ApiParam({ name: "id", required: true, type: String })
  async deactivateUser(@Param("id") id: string) {
    return await this.authService.DeactivateUser(id);
  }

  @Post("/deleteUserTemp/:id")
  @ApiOperation({ summary: "delete single user temporarily" })
  @ApiParam({ name: "id", required: true, type: String })
  async deleteUserTemp(@Param("id") id: string) {
    return await this.authService.DeleteUserTemp(id);
  }

  @Delete("/deleteUser/:id")
  @ApiOperation({ summary: "delete single user permanently" })
  @ApiParam({ name: "id", required: true, type: String })
  async deleteUser(@Param("id") id: string) {
    return await this.authService.DeleteUserPerm(id);
  }
}
