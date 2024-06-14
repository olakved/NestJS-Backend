import { Injectable } from "@nestjs/common";
import { Prisma } from "prisma/generated/client";
import { PrismaService } from "src/prisma/prisma.service";
import { IAppUsers } from "src/types/appModel.type";

type fieldToFind = "id" | "email" | "phone_number" | "password";

@Injectable()
export class AuthFinder {
  constructor(private prisma: PrismaService) {}

  async findAppUserWithField(
    field: fieldToFind,
    value: string,
  ): Promise<IAppUsers> {
    const whereClause: Record<string, string | number> = {};
    whereClause[field] = value;
    const foundUser = await this.prisma.appUsers.findUnique({
      where: whereClause as unknown as Prisma.AppUsersWhereUniqueInput,
      // where: {
      //     [field]: value
      // } as unknown as Prisma.AppUsersWhereUniqueInput
    });
    return foundUser;
  }

  async findAppUserWithFieldAndUpdate(
    field: fieldToFind,
    value: string | number,
    data: Partial<IAppUsers>,
  ) {
    const whereClause: Record<string, string | number> = {};
    whereClause[field] = value;
    const foundUpdatedUser = await this.prisma.appUsers.update({
      where: whereClause as unknown as Prisma.AppUsersWhereUniqueInput,
      data: data,
    });
    return foundUpdatedUser;
  }

  async findAppUserWithFieldAndDelete(
    field: fieldToFind,
    value: string | number,
  ) {
    const whereClause: Record<string, string | number> = {};
    whereClause[field] = value;
    const foundDeletedUser = await this.prisma.appUsers.delete({
      where: whereClause as unknown as Prisma.AppUsersWhereUniqueInput,
    });
    return foundDeletedUser;
  }

  async findAppUserWithFieldAndCount(field: fieldToFind, value: string) {
    const whereClause: Record<string, string | number> = {};
    whereClause[field] = value;
    const foundCount = await this.prisma.appUsers.count({
      where: whereClause as unknown as Prisma.AppUsersWhereUniqueInput,
    });
    return foundCount;
  }
}
