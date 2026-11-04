import { prisma } from "../config/prisma";
import { CreateGrupoDTO, UpdateGrupoDTO } from "../types/grupo";

export function findAll() {
  return prisma.grupo.findMany({
    orderBy: { nome: "asc" },
  });
}

export function findById(id: number) {
  return prisma.grupo.findUnique({
    where: { id },
    include: {
      participacoes: {
        include: { membro: { include: { pessoa: true } } },
      },
    },
  });
}

export function findByNome(nome: string) {
  return prisma.grupo.findUnique({
    where: { nome },
  });
}

export function create(data: CreateGrupoDTO) {
  return prisma.grupo.create({
    data: {
      nome: data.nome,
      descricao: data.descricao ?? "",
      criadoPorId: data.criadoPorId,
      administradorId: data.administradorId,
    },
  });
}

export function update(id: number, data: UpdateGrupoDTO) {
  return prisma.grupo.update({
    where: { id },
    data,
  });
}

export function remove(id: number) {
  return prisma.grupo.delete({
    where: { id },
  });
}
