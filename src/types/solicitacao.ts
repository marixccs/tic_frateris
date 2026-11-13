import type { TipoSolicitacao } from "../lib/enums";

export interface CreateSolicitacaoDTO {
  tipo: TipoSolicitacao;
  parecerFormador?: string | null;
  motivo: string;
  membroId: string;
  etapaSolicitadaId?: string | null;
}

export interface CreateSolicitacaoData {
  tipo: TipoSolicitacao;
  parecerFormador?: string | null;
  motivo: string;
  membroId: bigint;
  etapaSolicitadaId?: bigint | null;
}

export interface UpdateSolicitacaoDTO {
  tipo?: TipoSolicitacao;
  parecerFormador?: string | null;
  motivo?: string;
  membroId?: string;
  etapaSolicitadaId?: string | null;
}

export interface UpdateSolicitacaoData {
  tipo?: TipoSolicitacao;
  parecerFormador?: string | null;
  motivo?: string;
  membroId?: bigint;
  etapaSolicitadaId?: bigint | null;
}
