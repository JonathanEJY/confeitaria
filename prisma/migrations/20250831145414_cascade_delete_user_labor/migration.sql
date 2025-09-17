-- DropForeignKey
ALTER TABLE "public"."Labor" DROP CONSTRAINT "Labor_userId_fkey";

-- AddForeignKey
ALTER TABLE "public"."Labor" ADD CONSTRAINT "Labor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;
