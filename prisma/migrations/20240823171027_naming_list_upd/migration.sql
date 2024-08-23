/*
  Warnings:

  - A unique constraint covering the columns `[phone]` on the table `namingList` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "namingList_phone_key" ON "namingList"("phone");
