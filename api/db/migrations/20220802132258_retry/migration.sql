/*
  Warnings:

  - You are about to drop the `UserExample` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "UserExample";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Klant" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "naam" TEXT NOT NULL,
    "adres" TEXT NOT NULL,
    "postcode" TEXT NOT NULL,
    "woonplaats" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Taak" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "taak" TEXT NOT NULL,
    "extra" TEXT
);

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "resetToken" TEXT,
    "resetTokenExpiresAt" DATETIME
);

-- CreateTable
CREATE TABLE "_KlantToTaak" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_KlantToTaak_A_fkey" FOREIGN KEY ("A") REFERENCES "Klant" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_KlantToTaak_B_fkey" FOREIGN KEY ("B") REFERENCES "Taak" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_KlantToTaak_AB_unique" ON "_KlantToTaak"("A", "B");

-- CreateIndex
CREATE INDEX "_KlantToTaak_B_index" ON "_KlantToTaak"("B");
