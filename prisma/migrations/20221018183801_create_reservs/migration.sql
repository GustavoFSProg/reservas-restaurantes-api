-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Reservas" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "table_number" INTEGER NOT NULL,
    "table_id" TEXT NOT NULL,
    "client_name" TEXT NOT NULL,
    "fone" TEXT NOT NULL,
    "date" TEXT NOT NULL
);
INSERT INTO "new_Reservas" ("client_name", "date", "fone", "id", "table_id", "table_number") SELECT "client_name", "date", "fone", "id", "table_id", "table_number" FROM "Reservas";
DROP TABLE "Reservas";
ALTER TABLE "new_Reservas" RENAME TO "Reservas";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
