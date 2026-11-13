import type { StatusMembro } from "../lib/enums";

export interface CreateMembroDTO {
  nome: string;
  dataNascimento: string;
  cpf: string;
  observacao?: string | null;
  statusMembro: StatusMembro;
  dataIngresso: string;
  cadastradoPorId: string;
}

export interface CreateMembroData {
  nome: string;
  dataNascimento: Date;
  cpf: string;
  observacao?: string | null;
  statusMembro: StatusMembro;
  dataIngresso: Date;
  cadastradoPorId: bigint;
}

export interface UpdateMembroDTO {
  nome?: string;
  dataNascimento?: string;
  cpf?: string;
  observacao?: string | null;
  statusMembro?: StatusMembro;
  dataIngresso?: string;
  cadastradoPorId?: string;
}

export interface UpdateMembroData {
  nome?: string;
  dataNascimento?: Date;
  cpf?: string;
  observacao?: string | null;
  statusMembro?: StatusMembro;
  dataIngresso?: Date;
  cadastradoPorId?: bigint;
}
