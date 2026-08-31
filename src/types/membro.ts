import { StatusMembro } from "../generated/prisma/enums";

export interface CreateMembroDTO {
  nome: string;
  dataNascimento: string;
  cpf: string;
  observacao?: string;
  statusMembro: StatusMembro;
  dataIngresso: string;
}

export interface UpdateMembroDTO {
  nome?: string;
  dataNascimento?: string;
  cpf?: string;
  observacao?: string;
  statusMembro?: StatusMembro;
  dataIngresso?: string;
}

export interface CreateMembroData {
  nome: string;
  dataNascimento: Date;
  cpf: string;
  observacao?: string;
  statusMembro: StatusMembro;
  dataIngresso: Date;
}

export interface UpdateMembroData {
  nome?: string;
  dataNascimento?: Date;
  cpf?: string;
  observacao?: string;
  statusMembro?: StatusMembro;
  dataIngresso?: Date;
}