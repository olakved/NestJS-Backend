import { Module } from "@nestjs/common";
import { ContactListService } from "./contact-list.service";
import { ContactListController } from "./contact-list.controller";
import { PrismaService } from "../../prisma/prisma.service";

@Module({
  controllers: [ContactListController],
  providers: [ContactListService, PrismaService],
})
export class ContactListModule {}
