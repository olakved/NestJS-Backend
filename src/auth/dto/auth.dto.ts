import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, IsBoolean, IsNumber } from "class-validator";

export class CreateUserDTO {
  @ApiProperty()
  @IsString()
  firstname: string;

  @ApiProperty()
  @IsString()
  lastname: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  password: string;

  @ApiProperty()
  @IsString()
  phone_number: string;

  @ApiProperty({ enum: ["user", "admin", "systemAdmin"] })
  @IsString()
  role: string;
}

export class UserDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  firstname: string;

  @ApiProperty()
  lastname: string;

  @ApiProperty()
  phone_number: string;

  @ApiProperty()
  role: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty({ required: false })
  updatedAt?: Date;

  @ApiProperty({ required: false })
  lastLogin?: Date;
}

export class LoginUserDTO {
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  password: string;
}

export class ForgetPasswordDTO {
  @ApiProperty()
  @IsEmail()
  email: string;
}

export class ResetPasswordDTO {
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  otpCode: string;

  @ApiProperty()
  @IsString()
  new_password: string;
}

export class GenericResponse {
  @ApiProperty()
  @IsBoolean()
  status: boolean;

  @ApiProperty()
  @IsString()
  message: string;

  @ApiProperty()
  @IsNumber()
  statusCode: number;
}

export class IGetSingleUser extends GenericResponse {
  @ApiProperty({ type: () => UserDto })
  data: UserDto;
}
