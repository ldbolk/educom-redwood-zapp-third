/*
  Warnings:

  - You are about to drop the `_BezoekToTaak` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_BezoekToTaak";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "TakenOnBezoek" (
    "taakId" INTEGER NOT NULL,
    "bezoekId" INTEGER NOT NULL,

    PRIMARY KEY ("taakId", "bezoekId"),
    CONSTRAINT "TakenOnBezoek_taakId_fkey" FOREIGN KEY ("taakId") REFERENCES "Taak" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "TakenOnBezoek_bezoekId_fkey" FOREIGN KEY ("bezoekId") REFERENCES "Bezoek" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
