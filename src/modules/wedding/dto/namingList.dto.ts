import { ApiProperty } from "@nestjs/swagger";
import {
  IsBoolean,
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
} from "class-validator";

export class CreateWeddingDTO {
  @ApiProperty()
  @IsString()
  @MinLength(1)
  fullName: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  dietary?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  willAttend?: boolean;
}

export class GetAllNamingListDto {
  @ApiProperty({
    example: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    required: false,
  })
  id: string;

  @ApiProperty({ example: 1, required: false })
  @IsNumber()
  page: number;

  @ApiProperty({ example: 10, required: false })
  @IsNumber()
  limit: number;

  @ApiProperty({ example: "", required: false })
  @IsString()
  phone: string;

  @ApiProperty({ example: "", required: false })
  @IsString()
  email: string;

  @ApiProperty({ example: "08-12-2023", required: false })
  createdAt: string;
}

export class changeMessageStatusDTO {
  @ApiProperty({
    example: "unread",
    required: false,
    enum: ["read", "unread"],
  })
  status: string;
}
