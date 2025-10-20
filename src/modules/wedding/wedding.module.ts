import { Module } from "@nestjs/common";
import { WeddingService } from "./wedding.service";
import { WeddingController } from "./wedding.controller";
import { PrismaService } from "../../prisma/prisma.service";

@Module({
  controllers: [WeddingController],
  providers: [WeddingService, PrismaService],
})
export class WeddingModule {}
