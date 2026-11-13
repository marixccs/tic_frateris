import * as membroRepository from "../repositories/membroRepository";
import { AppError } from "../middlewares/AppError";
import { StatusMembro } from "../lib/enums";
import type {
  CreateMembroDTO,
  CreateMembroData,
  UpdateMembroDTO,
  UpdateMembroData,
} from "../types/membro";

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

function validarObservacao(valor: unknown): string | null | undefined {
  if (valor === null || valor === undefined) {
    return valor;
  }

  if (typeof valor !== "string" || valor.length > 500) {
    throw new AppError("Observação inválida ou com mais de 500 caracteres");
  }

  return valor.trim();
}

function converterData(valor: string, campo: string): Date {
  if (typeof valor !== "string" || !valor.trim()) {
    throw new AppError(`Data inválida no campo ${campo}`);
  }

  const data = new Date(valor);

  if (Number.isNaN(data.getTime())) {
    throw new AppError(`Data inválida no campo ${campo}`);
  }

  return data;
}

function validarStatus(status: StatusMembro | undefined): void {
  if (status !== undefined && !Object.values(StatusMembro).includes(status)) {
    throw new AppError("Status do membro inválido");
  }
}

export function listar() {
  return membroRepository.findAll();
}

export async function buscarPorId(id: Identificador) {
  const membro = await membroRepository.findById(converterId(id, "Id do membro"));

  if (!membro) {
    throw new AppError("Membro não encontrado", 404);
  }

  return membro;
}

export async function criar(data: CreateMembroDTO) {
  const nome = validarTexto(data.nome, "nome", 100);
  const cpf = validarTexto(data.cpf, "cpf", 14);
  const dataNascimento = converterData(data.dataNascimento, "dataNascimento");
  const dataIngresso = converterData(data.dataIngresso, "dataIngresso");
  const cadastradoPorId = converterId(data.cadastradoPorId, "cadastradoPorId");

  if (data.statusMembro === undefined) {
    throw new AppError("O status do membro é obrigatório");
  }
  validarStatus(data.statusMembro);

  const dados: CreateMembroData = {
    nome,
    cpf,
    dataNascimento,
    dataIngresso,
    statusMembro: data.statusMembro,
    cadastradoPorId,
  };

  if (data.observacao !== undefined) {
    dados.observacao = validarObservacao(data.observacao);
  }

  return membroRepository.create(dados);
}

export async function atualizar(id: Identificador, data: UpdateMembroDTO) {
  const idMembro = converterId(id, "Id do membro");
  await buscarPorId(idMembro);

  const dados: UpdateMembroData = {};

  if (data.nome !== undefined) {
    dados.nome = validarTexto(data.nome, "nome", 100);
  }

  if (data.cpf !== undefined) {
    dados.cpf = validarTexto(data.cpf, "cpf", 14);
  }

  if (data.dataNascimento !== undefined) {
    dados.dataNascimento = converterData(data.dataNascimento, "dataNascimento");
  }

  if (data.dataIngresso !== undefined) {
    dados.dataIngresso = converterData(data.dataIngresso, "dataIngresso");
  }

  if (data.statusMembro !== undefined) {
    validarStatus(data.statusMembro);
    dados.statusMembro = data.statusMembro;
  }

  if (data.observacao !== undefined) {
    dados.observacao = validarObservacao(data.observacao);
  }

  if (data.cadastradoPorId !== undefined) {
    dados.cadastradoPorId = converterId(data.cadastradoPorId, "cadastradoPorId");
  }

  return membroRepository.update(idMembro, dados);
}

export async function remover(id: Identificador) {
  const idMembro = converterId(id, "Id do membro");
  await buscarPorId(idMembro);
  return membroRepository.remove(idMembro);
}
