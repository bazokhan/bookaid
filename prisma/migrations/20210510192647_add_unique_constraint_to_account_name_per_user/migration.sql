/*
  Warnings:

  - A unique constraint covering the columns `[name,userId]` on the table `accounts` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "user_account" ON "accounts"("name", "userId");
