import { StatusGrupo } from "../generated/prisma/enums";

export interface CreateGrupoDTO {
  nome: string;
  descricao?: string;
  statusGrupo?: StatusGrupo;
}

export interface UpdateGrupoDTO {
  nome?: string;
  descricao?: string;
  statusGrupo?: StatusGrupo;
}
