-- CreateTable
CREATE TABLE "public"."users" (
    "uuid" TEXT NOT NULL,
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "public"."Labor" (
    "uuid" TEXT NOT NULL,
    "desiredSalary" DOUBLE PRECISION NOT NULL,
    "workDaysPerMonth" INTEGER NOT NULL,
    "workHoursPerDay" DOUBLE PRECISION NOT NULL,
    "electricity" DOUBLE PRECISION,
    "water" DOUBLE PRECISION,
    "rent" DOUBLE PRECISION,
    "wage" DOUBLE PRECISION,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Labor_pkey" PRIMARY KEY ("uuid")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "public"."users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Labor_userId_key" ON "public"."Labor"("userId");

-- AddForeignKey
ALTER TABLE "public"."Labor" ADD CONSTRAINT "Labor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;
