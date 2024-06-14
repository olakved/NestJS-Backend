-- CreateEnum
CREATE TYPE "Status" AS ENUM ('active', 'inactive', 'deleted');

-- AlterTable
ALTER TABLE "AppUsers" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'inactive';
