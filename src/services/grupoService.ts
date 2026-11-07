import * as grupoRepository from "../repositories/grupoRepository";
import { AppError } from "../middlewares/AppError";
import { CreateGrupoDTO, UpdateGrupoDTO } from "../types/grupo";

async function validarNomeRepetido(nome: string, idAtual?: number) {
  const grupoExistente = await grupoRepository.findByNome(nome);

  if (grupoExistente && Number(grupoExistente.id) !== idAtual) {
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
  if (
    !Number.isInteger(data.criadoPorId) ||
    !Number.isInteger(data.administradorId)
  ) {
    throw new AppError("criadoPorId e administradorId são obrigatórios");
  }

  const nome = data.nome.trim();

  await validarNomeRepetido(nome);

  return grupoRepository.create({
    nome,
    descricao: data.descricao,
    criadoPorId: data.criadoPorId,
    administradorId: data.administradorId,
  });
}

export async function atualizar(id: number, data: UpdateGrupoDTO) {
  await buscarPorId(id);

  const dados: UpdateGrupoDTO = {
    descricao: data.descricao,
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
