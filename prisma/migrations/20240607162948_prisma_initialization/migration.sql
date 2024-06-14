-- CreateTable
CREATE TABLE "AppUsers" (
    "id" TEXT NOT NULL,
    "firstname" TEXT,
    "lastname" TEXT,
    "password" TEXT,
    "email" TEXT NOT NULL,
    "phone_number" INTEGER NOT NULL,

    CONSTRAINT "AppUsers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AppUsers_id_key" ON "AppUsers"("id");

-- CreateIndex
CREATE UNIQUE INDEX "AppUsers_email_key" ON "AppUsers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "AppUsers_phone_number_key" ON "AppUsers"("phone_number");
