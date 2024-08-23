import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNumber, IsString } from "class-validator";

export class CreateNamingDTO {
  @ApiProperty()
  @IsEmail()
  firstName: string;

  @ApiProperty()
  @IsString()
  lastName: string;

  @ApiProperty()
  @IsString()
  phone: string;
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
