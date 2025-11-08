/*
  Warnings:

  - You are about to drop the column `price` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `stocks` table. All the data in the column will be lost.
  - You are about to drop the column `unit` on the `stocks` table. All the data in the column will be lost.
  - Made the column `userId` on table `stocks` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."products" DROP COLUMN "price",
DROP COLUMN "quantity",
ALTER COLUMN "stockId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."stocks" DROP COLUMN "quantity",
DROP COLUMN "unit",
ALTER COLUMN "userId" SET NOT NULL;

-- CreateTable
CREATE TABLE "public"."stock_products" (
    "uuid" TEXT NOT NULL,
    "quantity" DECIMAL(9,2) NOT NULL DEFAULT 0,
    "lot" TEXT,
    "expiresAt" TIMESTAMP(3),
    "costPrice" DECIMAL(9,2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "productId" TEXT NOT NULL,
    "stockId" TEXT NOT NULL,

    CONSTRAINT "stock_products_pkey" PRIMARY KEY ("uuid")
);

-- CreateIndex
CREATE INDEX "stock_products_productId_idx" ON "public"."stock_products"("productId");

-- CreateIndex
CREATE INDEX "stock_products_stockId_idx" ON "public"."stock_products"("stockId");

-- AddForeignKey
ALTER TABLE "public"."stock_products" ADD CONSTRAINT "stock_products_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."products"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."stock_products" ADD CONSTRAINT "stock_products_stockId_fkey" FOREIGN KEY ("stockId") REFERENCES "public"."stocks"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;
