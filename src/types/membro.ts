import { StatusMembro } from "../lib/enums";

export interface CreateMembroDTO {
  nome: string;
  dataNascimento: string;
  cpf: string;
  observacao?: string;
  statusMembro: StatusMembro;
  dataIngresso: string;
  grupoId?: number;
  cadastradoPorId: number;
}

export interface UpdateMembroDTO {
  nome?: string;
  dataNascimento?: string;
  cpf?: string;
  observacao?: string;
  statusMembro?: StatusMembro;
  dataIngresso?: string;
  grupoId?: number | null;
}

export interface CreateMembroData {
  nome: string;
  dataNascimento: Date;
  cpf: string;
  observacao?: string;
  statusMembro: StatusMembro;
  dataIngresso: Date;
  grupoId?: number;
  cadastradoPorId: number;
}

export interface UpdateMembroData {
  nome?: string;
  dataNascimento?: Date;
  cpf?: string;
  observacao?: string;
  statusMembro?: StatusMembro;
  dataIngresso?: Date;
  grupoId?: number | null;
}
