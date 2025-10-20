-- CreateTable
CREATE TABLE "weddingList" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "fullName" TEXT,
    "phone" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "weddingList_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "weddingList_id_key" ON "weddingList"("id");

-- CreateIndex
CREATE UNIQUE INDEX "weddingList_email_key" ON "weddingList"("email");

-- CreateIndex
CREATE UNIQUE INDEX "weddingList_phone_key" ON "weddingList"("phone");
