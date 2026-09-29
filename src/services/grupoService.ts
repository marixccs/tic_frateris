import * as grupoRepository from "../repositories/grupoRepository";
import { AppError } from "../middlewares/AppError";
import { StatusGrupo } from "../generated/prisma/enums";
import { CreateGrupoDTO, UpdateGrupoDTO } from "../types/grupo";

function validarStatus(status?: StatusGrupo) {
  if (status && !Object.values(StatusGrupo).includes(status)) {
    throw new AppError("Status do grupo inválido");
  }
}

async function validarNomeRepetido(nome: string, idAtual?: number) {
  const grupoExistente = await grupoRepository.findByNome(nome);

  if (grupoExistente && grupoExistente.id !== idAtual) {
    throw new AppError("Já existe um grupo com esse nome", 409);
  }
}

export function listar() {
  return grupoRepository.findAll();
}

export async function buscarPorId(id: number) {
  if (!Number.isInteger(id)) {
    throw new AppError("Id do grupo inválido");
  }

  const grupo = await grupoRepository.findById(id);

  if (!grupo) {
    throw new AppError("Grupo não encontrado", 404);
  }

  return grupo;
}

export async function criar(data: CreateGrupoDTO) {
  if (typeof data.nome !== "string" || !data.nome.trim()) {
    throw new AppError("O nome do grupo é obrigatório");
  }

  validarStatus(data.statusGrupo);

  const nome = data.nome.trim();

  await validarNomeRepetido(nome);

  return grupoRepository.create({
    nome,
    descricao: data.descricao,
    statusGrupo: data.statusGrupo,
  });
}

export async function atualizar(id: number, data: UpdateGrupoDTO) {
  await buscarPorId(id);

  validarStatus(data.statusGrupo);

  const dados: UpdateGrupoDTO = {
    descricao: data.descricao,
    statusGrupo: data.statusGrupo,
  };

  if (data.nome !== undefined) {
    if (typeof data.nome !== "string" || !data.nome.trim()) {
      throw new AppError("O nome do grupo não pode ficar vazio");
    }

    dados.nome = data.nome.trim();

    await validarNomeRepetido(dados.nome, id);
  }

  return grupoRepository.update(id, dados);
}

export async function remover(id: number) {
  await buscarPorId(id);

  return grupoRepository.remove(id);
}
