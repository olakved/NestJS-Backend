import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsEmail, IsNumber, IsString } from "class-validator";

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

export class CreateMessage {
  @ApiProperty()
  @IsEmail()
  senderEmail: string;

  @ApiProperty()
  @IsString()
  senderName: string;

  @ApiProperty()
  @IsString()
  message: string;
}

export class ICreateMessageDTO extends GenericResponse {
  @ApiProperty({ type: () => [CreateMessage] })
  data: CreateMessage[];
}
