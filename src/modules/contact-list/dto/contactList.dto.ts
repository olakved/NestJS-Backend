import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNumber, IsString } from "class-validator";

export class CreateMessageDTO {
  @ApiProperty()
  @IsEmail()
  senderEmail: string;

  @ApiProperty()
  @IsString()
  senderName: string;

  @ApiProperty()
  @IsString()
  senderPhone: string;

  @ApiProperty()
  @IsString()
  messageTitle: string;

  @ApiProperty({ example: "Hi there, how are you?" })
  @IsString()
  message: string;
}

export class GetAllMessagesDto {
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

  //   @ApiProperty({ example: "", required: false })
  //   @IsString()
  //   search: string;

  @ApiProperty({ example: "08-12-2023", required: false })
  createdAt: string;

  @ApiProperty({
    example: "unread",
    required: false,
    enum: ["read", "unread"],
  })
  status: string;
}

export class changeMessageStatusDTO {
  @ApiProperty({
    example: "unread",
    required: false,
    enum: ["read", "unread"],
  })
  status: string;
}
