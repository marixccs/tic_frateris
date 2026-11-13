export interface CreateParticipacaoGrupoDTO {
  dataEntrada: string;
  dataSaida?: string | null;
  observacao?: string | null;
  membroId: string;
  grupoId: string;
}

export interface CreateParticipacaoGrupoData {
  dataEntrada: Date;
  dataSaida?: Date | null;
  observacao?: string | null;
  membroId: bigint;
  grupoId: bigint;
}

export interface UpdateParticipacaoGrupoDTO {
  dataEntrada?: string;
  dataSaida?: string | null;
  observacao?: string | null;
  membroId?: string;
  grupoId?: string;
}

export interface UpdateParticipacaoGrupoData {
  dataEntrada?: Date;
  dataSaida?: Date | null;
  observacao?: string | null;
  membroId?: bigint;
  grupoId?: bigint;
}
