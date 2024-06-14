import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { NestExpressApplication } from "@nestjs/platform-express";
import { ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { NestConfig, SwaggerConfig } from "./common/config/config.type";
import { ResponseInterceptor } from "./filter/respone.service";

async function bootstrap() {
  const CSS_URL =
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css";

  const CUSTOM_JS_URL = [
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.js",
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.js",
  ];

  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const configService = app.get(ConfigService);
  const nestConfig = configService.get<NestConfig>("nest");
  const swaggerConfig = configService.get<SwaggerConfig>("swagger");

  app.enableCors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  });

  app.useGlobalInterceptors(new ResponseInterceptor()); // TODO: pick from escape later

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  if (swaggerConfig.enabled) {
    const options = new DocumentBuilder()
      .setTitle(swaggerConfig.title || "Nest Api documentation")
      .setDescription(swaggerConfig.description || "My Nest API description")
      .setVersion(swaggerConfig.version || "1.5")
      .addBearerAuth({
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
        name: "JWT",
        description: "Enter JWT token",
        in: "header",
      })
      .build();

    const document = SwaggerModule.createDocument(app, options);

    SwaggerModule.setup(swaggerConfig.path || "/api", app, document, {
      customCssUrl: CSS_URL,
      customJs: CUSTOM_JS_URL,
      swaggerOptions: {
        persistAuthorization: true,
      },
    });
  }

  await app.listen(nestConfig.port);
}
bootstrap();
