/*
  Warnings:

  - You are about to drop the column `password` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `Users` table. All the data in the column will be lost.
  - Added the required column `celular` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Tables" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "number" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "client_name" TEXT NOT NULL,
    "time" DATETIME NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "celular" TEXT NOT NULL
);
INSERT INTO "new_Users" ("email", "id", "name") SELECT "email", "id", "name" FROM "Users";
DROP TABLE "Users";
ALTER TABLE "new_Users" RENAME TO "Users";
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
