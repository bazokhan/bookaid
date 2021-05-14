/*
  Warnings:

  - A unique constraint covering the columns `[userId,accountId]` on the table `permission` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "user_acc" ON "permission"("userId", "accountId");
