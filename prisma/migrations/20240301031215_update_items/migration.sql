/*
  Warnings:

  - Added the required column `price` to the `Items` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `Items` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Items" ADD COLUMN     "price" INTEGER NOT NULL,
ALTER COLUMN "name" SET NOT NULL;
