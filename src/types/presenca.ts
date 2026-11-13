import type { StatusPresenca } from "../lib/enums";

export interface CreatePresencaDTO {
  dataRegistro: string;
  observacao?: string | null;
  status: StatusPresenca;
  reuniaoId: string;
  membroId: string;
  registradaPorId: string;
}

export interface CreatePresencaData {
  dataRegistro: Date;
  observacao?: string | null;
  status: StatusPresenca;
  reuniaoId: bigint;
  membroId: bigint;
  registradaPorId: bigint;
}

export interface UpdatePresencaDTO {
  dataRegistro?: string;
  observacao?: string | null;
  status?: StatusPresenca;
  reuniaoId?: string;
  membroId?: string;
  registradaPorId?: string;
}

export interface UpdatePresencaData {
  dataRegistro?: Date;
  observacao?: string | null;
  status?: StatusPresenca;
  reuniaoId?: bigint;
  membroId?: bigint;
  registradaPorId?: bigint;
}
