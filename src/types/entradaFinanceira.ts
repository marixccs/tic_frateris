import type { TipoEntrada } from "../lib/enums";

export interface CreateEntradaFinanceiraDTO {
  valor: string;
  dataMovimentacao: string;
  descricao: string;
  registradaPorId: string;
  tipoEntrada: TipoEntrada;
  origem: string;
}

export interface CreateEntradaFinanceiraData {
  valor: string;
  dataMovimentacao: Date;
  descricao: string;
  registradaPorId: bigint;
  tipoEntrada: TipoEntrada;
  origem: string;
}

export interface UpdateEntradaFinanceiraDTO {
  valor?: string;
  dataMovimentacao?: string;
  descricao?: string;
  registradaPorId?: string;
  tipoEntrada?: TipoEntrada;
  origem?: string;
}

export interface UpdateEntradaFinanceiraData {
  valor?: string;
  dataMovimentacao?: Date;
  descricao?: string;
  registradaPorId?: bigint;
  tipoEntrada?: TipoEntrada;
  origem?: string;
}
