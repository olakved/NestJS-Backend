import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from "@nestjs/common";
import { ContactListService } from "./contact-list.service";
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiTags,
} from "@nestjs/swagger";
import {
  changeMessageStatusDTO,
  CreateMessageDTO,
  GetAllMessagesDto,
} from "./dto/contactList.dto";

@ApiTags("Contact List")
@Controller("contact-list")
export class ContactListController {
  constructor(private readonly contactListService: ContactListService) {}

  @Post("/create-message")
  @ApiOperation({ summary: "create message" })
  @ApiBody({ type: CreateMessageDTO })
  async createMessage(@Body() dto) {
    return await this.contactListService.createMessage(dto);
  }

  @Get("single-messages/:id")
  @ApiParam({ name: "id", required: true, type: String })
  async getSingleMessages(@Param("id") id: string) {
    return await this.contactListService.getSingleMssage(id);
  }

  @Get("all-messages")
  @ApiQuery({ type: GetAllMessagesDto, required: false })
  async getAllMessages(@Query() dto) {
    return await this.contactListService.getAllMessages(dto);
  }

  @Patch("/update-status/:id")
  @ApiOperation({ summary: "change message read status" })
  @ApiParam({ name: "id", required: true, type: String })
  @ApiBody({ type: changeMessageStatusDTO })
  async updateMessage(@Body() dto, @Param("id") id: string) {
    return await this.contactListService.changeMessageStatus(id, dto);
  }

  @Post("/update-message-views/:id")
  @ApiOperation({ summary: "Update message view count" })
  @ApiParam({ name: "id", required: true, type: String })
  async updateMessageViews(@Param("id") id: string) {
    return await this.contactListService.updateMessageView(id);
  }

  @Delete("/deleteMessage/:id")
  @ApiOperation({ summary: "delete message permanently" })
  @ApiParam({ name: "id", required: true, type: String })
  async deleteMessage(@Param("id") id: string) {
    return await this.contactListService.deleteMessage(id);
  }
}
