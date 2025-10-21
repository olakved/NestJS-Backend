import { Module } from "@nestjs/common";
import { WeddingService } from "./wedding.service";
import { WeddingController } from "./wedding.controller";
import { PrismaService } from "../../prisma/prisma.service";
import { GoogleSheetsService } from "./weddingSheet";

@Module({
  controllers: [WeddingController],
  providers: [WeddingService, PrismaService, GoogleSheetsService],
})
export class WeddingModule {}
