-- CreateEnum
CREATE TYPE "StatusGrupo" AS ENUM ('ATIVO', 'INATIVO');

-- AlterTable
ALTER TABLE "Membro" ADD COLUMN     "grupoId" INTEGER;

-- CreateTable
CREATE TABLE "Grupo" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "statusGrupo" "StatusGrupo" NOT NULL DEFAULT 'ATIVO',

    CONSTRAINT "Grupo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Grupo_nome_key" ON "Grupo"("nome");

-- AddForeignKey
ALTER TABLE "Membro" ADD CONSTRAINT "Membro_grupoId_fkey" FOREIGN KEY ("grupoId") REFERENCES "Grupo"("id") ON DELETE SET NULL ON UPDATE CASCADE;
