-- CreateTable
CREATE TABLE "Pokemons" (
    "id" INTEGER NOT NULL,
    "appeared" INTEGER NOT NULL,
    "voted_for" INTEGER NOT NULL,

    CONSTRAINT "Pokemons_pkey" PRIMARY KEY ("id")
);
