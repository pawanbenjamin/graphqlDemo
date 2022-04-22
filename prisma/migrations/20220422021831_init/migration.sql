-- CreateTable
CREATE TABLE "Person" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "phone" INTEGER,
    "street" TEXT NOT NULL,
    "city" TEXT NOT NULL,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);
