-- AlterEnum
ALTER TYPE "RoleName" ADD VALUE 'Guest';

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "roleId" SET DEFAULT 4;
