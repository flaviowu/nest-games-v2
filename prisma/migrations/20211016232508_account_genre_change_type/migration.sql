/*
  Warnings:

  - You are about to alter the column `cpf` on the `account` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - A unique constraint covering the columns `[name]` on the table `Genre` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `account` MODIFY `cpf` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Genre_name_key` ON `Genre`(`name`);
