export interface CreateEtapaFormacaoDTO {
  nome: string;
  descricao: string;
  ordem: number;
  grupoId: string;
}

export interface CreateEtapaFormacaoData {
  nome: string;
  descricao: string;
  ordem: number;
  grupoId: bigint;
}

export interface UpdateEtapaFormacaoDTO {
  nome?: string;
  descricao?: string;
  ordem?: number;
  grupoId?: string;
}

export interface UpdateEtapaFormacaoData {
  nome?: string;
  descricao?: string;
  ordem?: number;
  grupoId?: bigint;
}
