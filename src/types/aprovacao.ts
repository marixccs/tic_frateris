import type { DecisaoConselho } from "../lib/enums";

export interface CreateAprovacaoDTO {
  decisaoConselho: DecisaoConselho;
  dataRegistro: string;
  parecer?: string | null;
  solicitacaoId: string;
  registradaPorId: string;
}

export interface CreateAprovacaoData {
  decisaoConselho: DecisaoConselho;
  dataRegistro: Date;
  parecer?: string | null;
  solicitacaoId: bigint;
  registradaPorId: bigint;
}

export interface UpdateAprovacaoDTO {
  decisaoConselho?: DecisaoConselho;
  dataRegistro?: string;
  parecer?: string | null;
  solicitacaoId?: string;
  registradaPorId?: string;
}

export interface UpdateAprovacaoData {
  decisaoConselho?: DecisaoConselho;
  dataRegistro?: Date;
  parecer?: string | null;
  solicitacaoId?: bigint;
  registradaPorId?: bigint;
}
