-- CreateTable
CREATE TABLE "Reservas" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "table_number" INTEGER NOT NULL,
    "table_id" TEXT NOT NULL,
    "client_name" TEXT NOT NULL,
    "fone" TEXT NOT NULL,
    "date" DATETIME NOT NULL
);
