import { Module } from "@nestjs/common";
import { NamingService } from "./naming.service";
import { NamingController } from "./naming.controller";
import { PrismaService } from "../../prisma/prisma.service";

@Module({
  controllers: [NamingController],
  providers: [NamingService, PrismaService],
})
export class NamingModule {}
