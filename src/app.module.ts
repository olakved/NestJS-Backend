import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import appConfig from "./common/config/config";
import { AuthModule } from "./auth/auth.module";
import { PrismaService } from "./prisma/prisma.service";
import { AuthFinder } from "./auth/authFinder.service";
import { ResponseInterceptor } from "./filter/respone.service";
import { ContactListModule } from "./modules/contact-list/contact-list.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig],
      envFilePath: ".env",
    }),
    AuthModule,
    ContactListModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService, AuthFinder, ResponseInterceptor],
})
export class AppModule {}
