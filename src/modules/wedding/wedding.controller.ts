import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { WeddingService } from "./wedding.service";
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiTags,
} from "@nestjs/swagger";
import { CreateWeddingDTO, GetAllNamingListDto } from "./dto/namingList.dto";

@ApiTags("Wedding List")
@Controller("wedding")
export class WeddingController {
  constructor(private readonly weddingService: WeddingService) {}

  @Post("/create-wedding-list")
  @ApiOperation({ summary: "create wedding list" })
  @ApiBody({ type: CreateWeddingDTO })
  async createMessage(@Body() dto) {
    return await this.weddingService.createWeddingListDetails(dto);
  }

  @Get("single-message/:phone")
  @ApiParam({ name: "phone", required: true, type: String })
  async getSingleMessages(@Param("phone") phone: string) {
    return await this.weddingService.getSingleMssage(phone);
  }

  @Get("all-wedding-users")
  @ApiQuery({ type: GetAllNamingListDto, required: false })
  async getAllMessages(@Query() dto) {
    return await this.weddingService.getAllMessages(dto);
  }
}
