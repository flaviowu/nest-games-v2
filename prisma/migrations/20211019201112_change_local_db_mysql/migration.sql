/*
  Warnings:

  - You are about to drop the column `surname` on the `account` table. All the data in the column will be lost.
  - Added the required column `lastname` to the `Account` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `account` DROP COLUMN `surname`,
    ADD COLUMN `lastname` VARCHAR(191) NOT NULL;
