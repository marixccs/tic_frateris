import * as membroRepository from "../repositories/membroRepository";
import {
  CreateMembroDTO,
  UpdateMembroDTO,
  CreateMembroData,
  UpdateMembroData,
} from "../types/membro";

export function listar() {
  return membroRepository.findAll();
}

export function buscarPorId(id: number) {
  return membroRepository.findById(id);
}

export function criar(data: CreateMembroDTO) {
  const dados: CreateMembroData = {
    nome: data.nome,
    dataNascimento: new Date(data.dataNascimento),
    cpf: data.cpf,
    observacao: data.observacao,
    statusMembro: data.statusMembro,
    dataIngresso: new Date(data.dataIngresso),
  };

  return membroRepository.create(dados);
}

export function atualizar(id: number, data: UpdateMembroDTO) {
  const dados: UpdateMembroData = {
    nome: data.nome,
    cpf: data.cpf,
    observacao: data.observacao,
    statusMembro: data.statusMembro,
  };

  if (data.dataNascimento) {
    dados.dataNascimento = new Date(data.dataNascimento);
  }

  if (data.dataIngresso) {
    dados.dataIngresso = new Date(data.dataIngresso);
  }

  return membroRepository.update(id, dados);
}

export function remover(id: number) {
  return membroRepository.remove(id);
}