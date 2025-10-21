import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateWeddingDTO {
  @ApiProperty()
  @IsEmail()
  fullName: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  email: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  phone: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  geleOption: boolean;

  @ApiProperty()
  @IsString()
  @IsOptional()
  filaOption: boolean;

  @ApiProperty()
  @IsString()
  @IsOptional()
  willAttend: boolean;
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
