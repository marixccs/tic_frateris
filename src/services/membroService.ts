import * as membroRepository from "../repositories/membroRepository";
import * as grupoService from "./grupoService";
import { AppError } from "../middlewares/AppError";
import { StatusGrupo, StatusMembro } from "../generated/prisma/enums";
import {
  CreateMembroDTO,
  UpdateMembroDTO,
  CreateMembroData,
  UpdateMembroData,
} from "../types/membro";

function converterData(valor: string, campo: string) {
  const data = new Date(valor);

  if (isNaN(data.getTime())) {
    throw new AppError(`Data inválida no campo ${campo}`);
  }

  return data;
}

function validarStatus(status?: StatusMembro) {
  if (status && !Object.values(StatusMembro).includes(status)) {
    throw new AppError("Status do membro inválido");
  }
}

async function validarGrupo(grupoId?: number | null) {
  if (grupoId === undefined || grupoId === null) {
    return;
  }

  if (typeof grupoId !== "number") {
    throw new AppError("O grupoId precisa ser um número");
  }

  const grupo = await grupoService.buscarPorId(grupoId);

  if (grupo.statusGrupo !== StatusGrupo.ATIVO) {
    throw new AppError("O membro só pode ser vinculado a um grupo ativo");
  }
}

export function listar() {
  return membroRepository.findAll();
}

export async function buscarPorId(id: number) {
  if (!Number.isInteger(id)) {
    throw new AppError("Id do membro inválido");
  }

  const membro = await membroRepository.findById(id);

  if (!membro) {
    throw new AppError("Membro não encontrado", 404);
  }

  return membro;
}

export async function criar(data: CreateMembroDTO) {
  if (
    !data.nome ||
    !data.cpf ||
    !data.dataNascimento ||
    !data.dataIngresso ||
    !data.statusMembro
  ) {
    throw new AppError(
      "Preencha nome, cpf, dataNascimento, dataIngresso e statusMembro"
    );
  }

  validarStatus(data.statusMembro);

  await validarGrupo(data.grupoId);

  const dados: CreateMembroData = {
    nome: data.nome,
    dataNascimento: converterData(data.dataNascimento, "dataNascimento"),
    cpf: data.cpf,
    observacao: data.observacao,
    statusMembro: data.statusMembro,
    dataIngresso: converterData(data.dataIngresso, "dataIngresso"),
    grupoId: data.grupoId,
  };

  return membroRepository.create(dados);
}

export async function atualizar(id: number, data: UpdateMembroDTO) {
  await buscarPorId(id);

  if (data.nome === "" || data.cpf === "") {
    throw new AppError("Nome e cpf não podem ficar vazios");
  }

  validarStatus(data.statusMembro);

  await validarGrupo(data.grupoId);

  const dados: UpdateMembroData = {
    nome: data.nome,
    cpf: data.cpf,
    observacao: data.observacao,
    statusMembro: data.statusMembro,
    grupoId: data.grupoId,
  };

  if (data.dataNascimento) {
    dados.dataNascimento = converterData(data.dataNascimento, "dataNascimento");
  }

  if (data.dataIngresso) {
    dados.dataIngresso = converterData(data.dataIngresso, "dataIngresso");
  }

  return membroRepository.update(id, dados);
}

export async function remover(id: number) {
  await buscarPorId(id);

  return membroRepository.remove(id);
}
