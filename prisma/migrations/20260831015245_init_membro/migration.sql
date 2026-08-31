-- CreateEnum
CREATE TYPE "StatusMembro" AS ENUM ('ATIVO', 'INATIVO', 'INATIVO_TEMPORARIAMENTE');

-- CreateTable
CREATE TABLE "Membro" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "dataNascimento" DATE NOT NULL,
    "cpf" TEXT NOT NULL,
    "observacao" TEXT,
    "statusMembro" "StatusMembro" NOT NULL,
    "dataIngresso" DATE NOT NULL,

    CONSTRAINT "Membro_pkey" PRIMARY KEY ("id")
);
