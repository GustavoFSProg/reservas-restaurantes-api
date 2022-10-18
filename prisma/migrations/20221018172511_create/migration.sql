-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tables" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "number" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "client_name" TEXT NOT NULL,
    "time" TEXT NOT NULL
);
INSERT INTO "new_Tables" ("client_name", "id", "number", "status", "time") SELECT "client_name", "id", "number", "status", "time" FROM "Tables";
DROP TABLE "Tables";
ALTER TABLE "new_Tables" RENAME TO "Tables";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
