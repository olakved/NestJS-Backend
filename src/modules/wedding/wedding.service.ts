import {
  BadRequestException,
  Injectable,
  UseInterceptors,
} from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { uuidv7 } from "uuidv7";
import { CreateWeddingDTO, GetAllNamingListDto } from "./dto/namingList.dto";
import { ResponseInterceptor } from "../../filter/respone.service";
import { GoogleSheetsService } from "./weddingSheet";
import { ConfigService } from "@nestjs/config";
@UseInterceptors(ResponseInterceptor)
@Injectable()
export class WeddingService {
  private timeGenerated: string;

  constructor(
    private prisma: PrismaService,
    private readonly googleSheetsService: GoogleSheetsService,
    private configService: ConfigService,
  ) {
    this.timeGenerated = new Date().toISOString();
  }
  async createWeddingListDetails(dto: CreateWeddingDTO) {
    const data = {
      ...dto,
      id: uuidv7(),
      createdAt: this.timeGenerated,
    };

    const checkUser = await this.prisma.weddingList.findUnique({
      where: { phone: dto.phone },
    });

    if (checkUser) {
      throw new BadRequestException("Phone number already exist");
    }

    const checkUserEmail = await this.prisma.weddingList.findUnique({
      where: { email: dto.email },
    });

    if (checkUserEmail) {
      throw new BadRequestException("Email already exist");
    }

    const createdNaming = await this.prisma.weddingList.create({
      data: data,
    });

    if (!createdNaming) {
      throw new BadRequestException("Failed to save details.");
    }

    // ✅ Append to Google Sheet AFTER successful DB save
    try {
      const SPREADSHEET_ID = this.configService.get<string>("SPREADSHEET_ID"); // 👈 replace with your sheet ID
      const RANGE = "Sheet1!A:F"; // Adjust range based on your columns

      // Map your data to row (must match sheet column order)
      const row = [
        createdNaming.fullName,
        createdNaming.email,
        createdNaming.phone,
        createdNaming.geleOption ? "Yes" : "No",
        createdNaming.filaOption ? "Yes" : "No",
        createdNaming.willAttend ? "Yes" : "No",
      ];

      await this.googleSheetsService.appendRow(SPREADSHEET_ID, RANGE, [row]);
    } catch (error) {
      // Log error but don't fail the main request (optional)
      console.error("Failed to write to Google Sheets:", error);
      // You might want to use a queue or retry mechanism in production
    }

    return {
      message: "details submitted successfully",
    };
  }

  async getSingleMssage(phone: string) {
    const foundMessage = await this.prisma.namingList.findUnique({
      where: { phone },
    });

    if (!foundMessage) {
      throw new BadRequestException("number not found");
    }

    return {
      message: `Dear ${foundMessage.firstName}, You have registered. Close and Download Invite`,
      data: foundMessage,
    };
  }

  async getAllMessages(dto: GetAllNamingListDto) {
    const { createdAt, page = 1, limit = 10, id, phone } = dto;

    const limitNumber = Number(limit);
    const skip = ((page as number) - 1) * limitNumber;
    const offset = limitNumber;

    const where: { [key: string]: any } = {};

    if (id) {
      where.id = { contains: id, mode: "insensitive" };
    }

    if (phone) {
      const phoneArray = phone.split(",");
      where.phone = { in: phoneArray };
    }

    if (createdAt) {
      // Convert start date to ISO string format
      const startDate = new Date(createdAt);
      const endDate = new Date(createdAt);
      endDate.setDate(endDate.getDate() + 1);

      startDate.setHours(0, 0, 0, 0); // Reset time to start of the day
      where.createdAt = {
        gte: startDate.toISOString(),
        lt: endDate.toISOString(),
      };
    }

    const [findAllMessage, totalCount] = await Promise.all([
      this.prisma.namingList.findMany({
        where,
        select: {
          id: true,
          createdAt: true,
          firstName: true,
          lastName: true,
          phone: true,
        },
        orderBy: { createdAt: "desc" },
        skip,
        take: offset as number,
      }),
      this.prisma.namingList.count({
        where,
      }),
    ]);

    const totalPages = Math.ceil(totalCount / limitNumber);

    const message = findAllMessage.length
      ? "Messages fetched successfully"
      : "No Message Found";
    const success = findAllMessage?.length ? true : false;

    return {
      message,
      data: {
        total: success ? totalCount : 0,
        totalPages: success ? totalPages : 0,
        currentPage: success ? Number(page) : 0,
        pageSize: success ? offset : 0,
        messages: findAllMessage,
      },
    };
  }
}
