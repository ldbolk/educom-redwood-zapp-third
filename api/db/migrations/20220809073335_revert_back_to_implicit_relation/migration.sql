/*
  Warnings:

  - You are about to drop the `TakenOnBezoek` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "TakenOnBezoek";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "_BezoekToTaak" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_BezoekToTaak_A_fkey" FOREIGN KEY ("A") REFERENCES "Bezoek" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_BezoekToTaak_B_fkey" FOREIGN KEY ("B") REFERENCES "Taak" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_BezoekToTaak_AB_unique" ON "_BezoekToTaak"("A", "B");

-- CreateIndex
CREATE INDEX "_BezoekToTaak_B_index" ON "_BezoekToTaak"("B");
