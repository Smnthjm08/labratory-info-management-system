-- CreateTable
CREATE TABLE "DigitalSign" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "signUrl" TEXT NOT NULL,

    CONSTRAINT "DigitalSign_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DigitalSign" ADD CONSTRAINT "DigitalSign_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
