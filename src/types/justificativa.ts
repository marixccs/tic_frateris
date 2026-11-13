import type { StatusJustificativa } from "../lib/enums";

export interface CreateJustificativaDTO {
  motivo: string;
  dataJustificativa: string;
  status: StatusJustificativa;
  presencaId: string;
  analisadaPorId?: string | null;
}

export interface CreateJustificativaData {
  motivo: string;
  dataJustificativa: Date;
  status: StatusJustificativa;
  presencaId: bigint;
  analisadaPorId?: bigint | null;
}

export interface UpdateJustificativaDTO {
  motivo?: string;
  dataJustificativa?: string;
  status?: StatusJustificativa;
  presencaId?: string;
  analisadaPorId?: string | null;
}

export interface UpdateJustificativaData {
  motivo?: string;
  dataJustificativa?: Date;
  status?: StatusJustificativa;
  presencaId?: bigint;
  analisadaPorId?: bigint | null;
}
