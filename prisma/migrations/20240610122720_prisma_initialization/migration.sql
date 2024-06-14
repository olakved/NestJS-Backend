-- CreateEnum
CREATE TYPE "Role" AS ENUM ('systemAdmin', 'admin', 'user');

-- AlterTable
ALTER TABLE "AppUsers" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'user',
ADD COLUMN     "updatedAt" TIMESTAMP(3),
ALTER COLUMN "phone_number" SET DATA TYPE TEXT;
