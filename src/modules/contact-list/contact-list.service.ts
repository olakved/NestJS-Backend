import { BadRequestException, Injectable } from "@nestjs/common";
import {
  changeMessageStatusDTO,
  CreateMessageDTO,
  GetAllMessagesDto,
} from "./dto/contactList.dto";
import { PrismaService } from "../../prisma/prisma.service";
import { uuidv7 } from "uuidv7";

@Injectable()
export class ContactListService {
  private timeGenerated: string;
  constructor(private prisma: PrismaService) {
    this.timeGenerated = new Date().toISOString();
  }

  async createMessage(dto: CreateMessageDTO) {
    const data = {
      ...dto,
      id: uuidv7(),
      createdAt: this.timeGenerated,
    };
    const createdContactList = await this.prisma.contactList.create({
      data: data,
    });

    if (!createdContactList) {
      throw new BadRequestException("Failed to send message");
    }

    return {
      message: "Message sent successfully",
    };
  }

  async getSingleMssage(id: string) {
    const foundMessage = await this.prisma.contactList.findUnique({
      where: { id },
      select: {
        id: true,
        createdAt: true,
        senderEmail: true,
        senderName: true,
        totalViews: true,
        messageTitle: true,
        senderPhone: true,
        status: true,
        message: true,
      },
    });

    if (!foundMessage) {
      throw new BadRequestException("Message not found");
    }

    return {
      message: "Message found successfully",
      data: foundMessage,
    };
  }

  async updateMessageView(id: string) {
    const foundMessage = await this.prisma.contactList.findUnique({
      where: { id },
    });

    if (!foundMessage) {
      throw new BadRequestException("Message not found");
    }

    const updatedMessage = await this.prisma.contactList.update({
      where: { id },
      data: {
        totalViews: foundMessage.totalViews + 1,
      },
    });

    if (!updatedMessage) {
      throw new BadRequestException("Failed to update message");
    }

    console.log(updatedMessage);

    return {
      message: "Message updated successfully",
    };
  }

  async getAllMessages(dto: GetAllMessagesDto) {
    const { createdAt, page = 1, limit = 10, id, status } = dto;

    const limitNumber = Number(limit);
    const skip = ((page as number) - 1) * limitNumber;
    const offset = limitNumber;

    const where: { [key: string]: any } = {};

    if (id) {
      where.id = { contains: id, mode: "insensitive" };
    }

    if (status) {
      const statusArray = status.split(",");
      where.status = { in: statusArray };
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
      this.prisma.contactList.findMany({
        where,
        select: {
          id: true,
          createdAt: true,
          senderEmail: true,
          senderName: true,
          totalViews: true,
          messageTitle: true,
          senderPhone: true,
          status: true,
          message: true,
        },
        orderBy: { createdAt: "desc" },
        skip,
        take: offset as number,
      }),
      this.prisma.contactList.count({
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

  async deleteMessage(id: string) {
    const deletedMessage = await this.prisma.contactList.delete({
      where: { id },
    });

    if (!deletedMessage) {
      throw new BadRequestException("Failed to delete message");
    }

    return {
      message: "Message deleted successfully",
    };
  }

  async changeMessageStatus(id: string, dto: changeMessageStatusDTO) {
    const foundMessage = await this.prisma.contactList.findUnique({
      where: { id },
    });

    if (!foundMessage) {
      throw new BadRequestException("Message not found");
    }

    const updatedMessage = await this.prisma.contactList.update({
      where: { id },
      data: {
        status: dto.status as any,
      },
    });

    if (!updatedMessage) {
      throw new BadRequestException("Failed to update status");
    }

    return {
      message: "Message status updated successfully",
    };
  }
}
