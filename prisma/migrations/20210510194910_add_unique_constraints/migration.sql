/*
  Warnings:

  - A unique constraint covering the columns `[accountId,categoryId]` on the table `account_categories` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[accountId,clientId]` on the table `account_clients` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "acc_cat" ON "account_categories"("accountId", "categoryId");

-- CreateIndex
CREATE UNIQUE INDEX "acc_cli" ON "account_clients"("accountId", "clientId");
