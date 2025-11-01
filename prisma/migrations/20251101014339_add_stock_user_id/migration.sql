/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `stocks` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "public"."stocks" ADD COLUMN     "userId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "stocks_userId_key" ON "public"."stocks"("userId");

-- AddForeignKey
ALTER TABLE "public"."stocks" ADD CONSTRAINT "stocks_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;
