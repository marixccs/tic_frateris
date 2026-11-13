export interface CreateMovimentacaoFinanceiraDTO {
  valor: string;
  dataMovimentacao: string;
  descricao: string;
  registradaPorId: string;
}

export interface CreateMovimentacaoFinanceiraData {
  valor: string;
  dataMovimentacao: Date;
  descricao: string;
  registradaPorId: bigint;
}

export interface UpdateMovimentacaoFinanceiraDTO {
  valor?: string;
  dataMovimentacao?: string;
  descricao?: string;
  registradaPorId?: string;
}

export interface UpdateMovimentacaoFinanceiraData {
  valor?: string;
  dataMovimentacao?: Date;
  descricao?: string;
  registradaPorId?: bigint;
}
