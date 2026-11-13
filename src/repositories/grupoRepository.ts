import { prisma } from "../config/prisma";
import type { CreateGrupoData, UpdateGrupoData } from "../types/grupo";

export function findAll() {
  return prisma.grupo.findMany({
    orderBy: { nome: "asc" },
  });
}

export function findById(id: bigint) {
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

export function create(data: CreateGrupoData) {
  return prisma.grupo.create({
    data: {
      nome: data.nome,
      descricao: data.descricao,
      criadoPor: { connect: { id: data.criadoPorId } },
      administrador: { connect: { id: data.administradorId } },
    },
  });
}

export function update(id: bigint, data: UpdateGrupoData) {
  return prisma.grupo.update({
    where: { id },
    data: {
      ...(data.nome !== undefined ? { nome: data.nome } : {}),
      ...(data.descricao !== undefined ? { descricao: data.descricao } : {}),
      ...(data.criadoPorId !== undefined
        ? { criadoPor: { connect: { id: data.criadoPorId } } }
        : {}),
      ...(data.administradorId !== undefined
        ? { administrador: { connect: { id: data.administradorId } } }
        : {}),
    },
  });
}

export function remove(id: bigint) {
  return prisma.grupo.delete({
    where: { id },
  });
}
