/*
  Warnings:

  - Added the required column `updatedAt` to the `account_categories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `account_clients` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "account_categories" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "account_clients" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
