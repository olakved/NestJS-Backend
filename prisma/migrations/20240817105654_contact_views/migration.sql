-- AlterTable
ALTER TABLE "ContactList" ADD COLUMN     "messageTitle" TEXT,
ADD COLUMN     "senderPhone" TEXT,
ADD COLUMN     "totalViews" TEXT,
ALTER COLUMN "senderName" DROP NOT NULL,
ALTER COLUMN "senderEmail" DROP NOT NULL,
ALTER COLUMN "message" DROP NOT NULL;
