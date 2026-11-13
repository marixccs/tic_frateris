import * as grupoRepository from "../repositories/grupoRepository";
import { AppError } from "../middlewares/AppError";
import type {
  CreateGrupoDTO,
  CreateGrupoData,
  UpdateGrupoDTO,
  UpdateGrupoData,
} from "../types/grupo";

type Identificador = string | number | bigint;

function converterId(valor: Identificador, campo: string): bigint {
  let id: bigint;

  if (typeof valor === "bigint") {
    id = valor;
  } else if (typeof valor === "number") {
    if (!Number.isSafeInteger(valor)) {
      throw new AppError(`${campo} inválido`);
    }
    id = BigInt(valor);
  } else if (typeof valor === "string" && /^[1-9]\d{0,18}$/.test(valor.trim())) {
    id = BigInt(valor.trim());
  } else {
    throw new AppError(`${campo} inválido`);
  }

  if (id <= 0n || id > 9223372036854775807n) {
    throw new AppError(`${campo} inválido`);
  }

  return id;
}

function validarTexto(valor: unknown, campo: string, maximo: number): string {
  if (typeof valor !== "string" || !valor.trim()) {
    throw new AppError(`O campo ${campo} é obrigatório`);
  }

  const texto = valor.trim();
  if (texto.length > maximo) {
    throw new AppError(`O campo ${campo} deve ter no máximo ${maximo} caracteres`);
  }

  return texto;
}

function validarDescricao(valor: unknown): string {
  if (typeof valor !== "string") {
    throw new AppError("A descrição do grupo é obrigatória");
  }

  if (valor.length > 500) {
    throw new AppError("A descrição deve ter no máximo 500 caracteres");
  }

  return valor.trim();
}

async function validarNomeRepetido(nome: string, idAtual?: bigint) {
  const grupoExistente = await grupoRepository.findByNome(nome);

  if (grupoExistente && grupoExistente.id !== idAtual) {
    throw new AppError("Já existe um grupo com esse nome", 409);
  }
}

export function listar() {
  return grupoRepository.findAll();
}

export async function buscarPorId(id: Identificador) {
  const grupo = await grupoRepository.findById(converterId(id, "Id do grupo"));

  if (!grupo) {
    throw new AppError("Grupo não encontrado", 404);
  }

  return grupo;
}

export async function criar(data: CreateGrupoDTO) {
  const nome = validarTexto(data.nome, "nome", 100);
  const descricao = validarDescricao(data.descricao);

  const dados: CreateGrupoData = {
    nome,
    descricao,
    criadoPorId: converterId(data.criadoPorId, "criadoPorId"),
    administradorId: converterId(data.administradorId, "administradorId"),
  };

  await validarNomeRepetido(nome);
  return grupoRepository.create(dados);
}

export async function atualizar(id: Identificador, data: UpdateGrupoDTO) {
  const idGrupo = converterId(id, "Id do grupo");
  await buscarPorId(idGrupo);

  const dados: UpdateGrupoData = {};

  if (data.nome !== undefined) {
    dados.nome = validarTexto(data.nome, "nome", 100);
    await validarNomeRepetido(dados.nome, idGrupo);
  }

  if (data.descricao !== undefined) {
    dados.descricao = validarDescricao(data.descricao);
  }

  if (data.criadoPorId !== undefined) {
    dados.criadoPorId = converterId(data.criadoPorId, "criadoPorId");
  }

  if (data.administradorId !== undefined) {
    dados.administradorId = converterId(data.administradorId, "administradorId");
  }

  return grupoRepository.update(idGrupo, dados);
}

export async function remover(id: Identificador) {
  const idGrupo = converterId(id, "Id do grupo");
  await buscarPorId(idGrupo);
  return grupoRepository.remove(idGrupo);
}
