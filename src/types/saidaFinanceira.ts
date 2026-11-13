import type { TipoSaida } from "../lib/enums";

export interface CreateSaidaFinanceiraDTO {
  valor: string;
  dataMovimentacao: string;
  descricao: string;
  registradaPorId: string;
  destino: string;
  tipoSaida: TipoSaida;
}

export interface CreateSaidaFinanceiraData {
  valor: string;
  dataMovimentacao: Date;
  descricao: string;
  registradaPorId: bigint;
  destino: string;
  tipoSaida: TipoSaida;
}

export interface UpdateSaidaFinanceiraDTO {
  valor?: string;
  dataMovimentacao?: string;
  descricao?: string;
  registradaPorId?: string;
  destino?: string;
  tipoSaida?: TipoSaida;
}

export interface UpdateSaidaFinanceiraData {
  valor?: string;
  dataMovimentacao?: Date;
  descricao?: string;
  registradaPorId?: bigint;
  destino?: string;
  tipoSaida?: TipoSaida;
}
