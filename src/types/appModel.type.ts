import { Prisma } from "prisma/generated/client";

export type IAppUsers = Prisma.AppUsersCreateInput;

export type IRole = "admin" | "user" | "systemAdmin";

export type IStatus = "active" | "inactive" | "deleted";
