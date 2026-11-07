import { prisma } from "../config/prisma";
import {
  CreateMembroData,
  UpdateMembroData,
} from "../types/membro";

export function findAll() {
  return prisma.membro.findMany({
    include: {
      pessoa: true,
      participacoes: { include: { grupo: true } },
    },
  });
}

export function findById(id: number) {
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
      observacao: data.observacao,
      cadastradoPor: { connect: { id: data.cadastradoPorId } },
      pessoa: {
        create: {
          nome: data.nome,
          dataNascimento: data.dataNascimento,
          cpf: data.cpf,
        },
      },
      ...(data.grupoId === undefined
        ? {}
        : {
            participacoes: {
              create: {
                dataEntrada: data.dataIngresso,
                grupo: { connect: { id: data.grupoId } },
              },
            },
          }),
    },
  });
}

export function update(id: number, data: UpdateMembroData) {
  return prisma.membro.update({
    where: { id },
    data: {
      statusMembro: data.statusMembro,
      dataIngresso: data.dataIngresso,
      observacao: data.observacao,
      pessoa:
        data.nome === undefined &&
        data.dataNascimento === undefined &&
        data.cpf === undefined
          ? undefined
          : {
              update: {
                nome: data.nome,
                dataNascimento: data.dataNascimento,
                cpf: data.cpf,
              },
            },
      ...(data.grupoId === undefined
        ? {}
        : {
            participacoes: {
              create:
                data.grupoId === null
                  ? undefined
                  : {
                      dataEntrada: data.dataIngresso ?? new Date(),
                      grupo: { connect: { id: data.grupoId } },
                    },
              updateMany:
                data.grupoId === null
                  ? { where: { dataSaida: null }, data: { dataSaida: new Date() } }
                  : undefined,
            },
          }),
    },
  });
}

export function remove(id: number) {
  return prisma.membro.delete({
    where: { id },
  });
}
