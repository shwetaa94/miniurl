/*
  Warnings:

  - The `visitHistory` column on the `URL` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "URL" DROP COLUMN "visitHistory",
ADD COLUMN     "visitHistory" TIMESTAMP(3)[];
