import {
  BadRequestException,
  Injectable,
  UseInterceptors,
} from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { uuidv7 } from "uuidv7";
import { CreateNamingDTO, GetAllNamingListDto } from "./dto/namingList.dto";
import { ResponseInterceptor } from "../../filter/respone.service";
@UseInterceptors(ResponseInterceptor)
@Injectable()
export class NamingService {
  private timeGenerated: string;

  constructor(private prisma: PrismaService) {
    this.timeGenerated = new Date().toISOString();
  }
  async createNamingListDetails(dto: CreateNamingDTO) {
    const data = {
      ...dto,
      id: uuidv7(),
      createdAt: this.timeGenerated,
    };

    const checkUser = await this.prisma.namingList.findUnique({
      where: { phone: dto.phone },
    });
    if (checkUser) {
      //   throw new BadRequestException("User already exists");
      return {
        message: "User already exist",
      };
    }

    const createdNaming = await this.prisma.namingList.create({
      data: data,
    });

    if (!createdNaming) {
      throw new BadRequestException("Failed to send details");
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
