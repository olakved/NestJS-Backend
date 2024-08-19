/*
  Warnings:

  - The `totalViews` column on the `ContactList` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "ContactList" DROP COLUMN "totalViews",
ADD COLUMN     "totalViews" INTEGER,
ALTER COLUMN "messageTitle" SET DATA TYPE TEXT;
