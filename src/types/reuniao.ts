import type { StatusReuniao } from "../lib/enums";

export interface CreateReuniaoDTO {
  descricao: string;
  status: StatusReuniao;
  dataReuniao: string;
  grupoId: string;
  criadaPorId: string;
  etapaConcedidaId?: string | null;
}

export interface CreateReuniaoData {
  descricao: string;
  status: StatusReuniao;
  dataReuniao: Date;
  grupoId: bigint;
  criadaPorId: bigint;
  etapaConcedidaId?: bigint | null;
}

export interface UpdateReuniaoDTO {
  descricao?: string;
  status?: StatusReuniao;
  dataReuniao?: string;
  grupoId?: string;
  criadaPorId?: string;
  etapaConcedidaId?: string | null;
}

export interface UpdateReuniaoData {
  descricao?: string;
  status?: StatusReuniao;
  dataReuniao?: Date;
  grupoId?: bigint;
  criadaPorId?: bigint;
  etapaConcedidaId?: bigint | null;
}
