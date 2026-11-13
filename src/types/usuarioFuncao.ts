import type { StatusFuncaoUsuario } from "../lib/enums";

export interface CreateUsuarioFuncaoDTO {
  dataInicio: string;
  dataFim?: string | null;
  status: StatusFuncaoUsuario;
  usuarioId: string;
  funcaoId: string;
}

export interface CreateUsuarioFuncaoData {
  dataInicio: Date;
  dataFim?: Date | null;
  status: StatusFuncaoUsuario;
  usuarioId: bigint;
  funcaoId: bigint;
}

export interface UpdateUsuarioFuncaoDTO {
  dataInicio?: string;
  dataFim?: string | null;
  status?: StatusFuncaoUsuario;
  usuarioId?: string;
  funcaoId?: string;
}

export interface UpdateUsuarioFuncaoData {
  dataInicio?: Date;
  dataFim?: Date | null;
  status?: StatusFuncaoUsuario;
  usuarioId?: bigint;
  funcaoId?: bigint;
}
