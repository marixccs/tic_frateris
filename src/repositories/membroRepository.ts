import { prisma } from "../config/prisma";
import {
  CreateMembroData,
  UpdateMembroData,
} from "../types/membro";

export function findAll() {
  return prisma.membro.findMany();
}

export function findById(id: number) {
  return prisma.membro.findUnique({
    where: { id },
  });
}

export function create(data: CreateMembroData) {
  return prisma.membro.create({
    data,
  });
}

export function update(id: number, data: UpdateMembroData) {
  return prisma.membro.update({
    where: { id },
    data,
  });
}

export function remove(id: number) {
  return prisma.membro.delete({
    where: { id },
  });
}