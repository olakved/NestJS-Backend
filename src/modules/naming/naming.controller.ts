import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { NamingService } from "./naming.service";
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiTags,
} from "@nestjs/swagger";
import { CreateNamingDTO, GetAllNamingListDto } from "./dto/namingList.dto";

@ApiTags("Naming List")
@Controller("naming")
export class NamingController {
  constructor(private readonly namingService: NamingService) {}

  @Post("/create-naming-list")
  @ApiOperation({ summary: "create naming list" })
  @ApiBody({ type: CreateNamingDTO })
  async createMessage(@Body() dto) {
    return await this.namingService.createNamingListDetails(dto);
  }

  @Get("single-message/:phone")
  @ApiParam({ name: "phone", required: true, type: String })
  async getSingleMessages(@Param("phone") phone: string) {
    return await this.namingService.getSingleMssage(phone);
  }

  @Get("all-messages")
  @ApiQuery({ type: GetAllNamingListDto, required: false })
  async getAllMessages(@Query() dto) {
    return await this.namingService.getAllMessages(dto);
  }
}
