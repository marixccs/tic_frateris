export interface CreateHistoricoFormacaoDTO {
  dataInicio: string;
  dataFim?: string | null;
  observacao?: string | null;
  membroId: string;
  etapaId: string;
}

export interface CreateHistoricoFormacaoData {
  dataInicio: Date;
  dataFim?: Date | null;
  observacao?: string | null;
  membroId: bigint;
  etapaId: bigint;
}

export interface UpdateHistoricoFormacaoDTO {
  dataInicio?: string;
  dataFim?: string | null;
  observacao?: string | null;
  membroId?: string;
  etapaId?: string;
}

export interface UpdateHistoricoFormacaoData {
  dataInicio?: Date;
  dataFim?: Date | null;
  observacao?: string | null;
  membroId?: bigint;
  etapaId?: bigint;
}
