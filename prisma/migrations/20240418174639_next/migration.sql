/*
  Warnings:

  - You are about to drop the column `sex` on the `Profile` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[nickname]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE');

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "sex",
ADD COLUMN     "gender" "Gender",
ALTER COLUMN "phone" SET DATA TYPE TEXT;

-- DropEnum
DROP TYPE "Sex";

-- CreateIndex
CREATE UNIQUE INDEX "User_nickname_key" ON "User"("nickname");
