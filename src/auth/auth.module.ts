import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthFinder } from "./authFinder.service";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { PasswordService } from "./password.service";
import { JwtModule } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { SecurityConfig } from "src/common/config/config.type";

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: async (configService: ConfigService) => {
        const securityConfig = configService.get<SecurityConfig>("security");
        return {
          secret: configService.get<string>("JWT_ACCESS_SECRET"),
          signOptions: {
            expiresIn: securityConfig.expiresIn,
          },
        };
      },
      inject: [ConfigService],
    }),
  ],
  providers: [PrismaService, AuthFinder, AuthService, PasswordService],
  controllers: [AuthController],
  exports: [],
})
export class AuthModule {}
