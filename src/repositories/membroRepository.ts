import { prisma } from "../config/prisma";
import type { CreateMembroData, UpdateMembroData } from "../types/membro";

export function findAll() {
  return prisma.membro.findMany({
    include: {
      pessoa: true,
      participacoes: { include: { grupo: true } },
    },
  });
}

export function findById(id: bigint) {
  return prisma.membro.findUnique({
    where: { id },
    include: {
      pessoa: true,
      participacoes: { include: { grupo: true } },
    },
  });
}

export function create(data: CreateMembroData) {
  return prisma.membro.create({
    data: {
      statusMembro: data.statusMembro,
      dataIngresso: data.dataIngresso,
      ...(data.observacao !== undefined ? { observacao: data.observacao } : {}),
      cadastradoPor: {
        connect: { id: data.cadastradoPorId },
      },
      pessoa: {
        create: {
          nome: data.nome,
          dataNascimento: data.dataNascimento,
          cpf: data.cpf,
        },
      },
    },
    include: { pessoa: true, participacoes: { include: { grupo: true } } },
  });
}

export function update(id: bigint, data: UpdateMembroData) {
  const atualizarPessoa =
    data.nome !== undefined ||
    data.dataNascimento !== undefined ||
    data.cpf !== undefined;

  return prisma.membro.update({
    where: { id },
    data: {
      ...(data.statusMembro !== undefined
        ? { statusMembro: data.statusMembro }
        : {}),
      ...(data.dataIngresso !== undefined
        ? { dataIngresso: data.dataIngresso }
        : {}),
      ...(data.observacao !== undefined ? { observacao: data.observacao } : {}),
      ...(data.cadastradoPorId !== undefined
        ? { cadastradoPor: { connect: { id: data.cadastradoPorId } } }
        : {}),
      ...(atualizarPessoa
        ? {
            pessoa: {
              update: {
                ...(data.nome !== undefined ? { nome: data.nome } : {}),
                ...(data.dataNascimento !== undefined
                  ? { dataNascimento: data.dataNascimento }
                  : {}),
                ...(data.cpf !== undefined ? { cpf: data.cpf } : {}),
              },
            },
          }
        : {}),
    },
    include: { pessoa: true, participacoes: { include: { grupo: true } } },
  });
}

export function remove(id: bigint) {
  return prisma.membro.delete({
    where: { id },
  });
}
