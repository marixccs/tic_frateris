export interface CreateGrupoDTO {
  nome: string;
  descricao: string;
  criadoPorId: string;
  administradorId: string;
}

export interface CreateGrupoData {
  nome: string;
  descricao: string;
  criadoPorId: bigint;
  administradorId: bigint;
}

export interface UpdateGrupoDTO {
  nome?: string;
  descricao?: string;
  criadoPorId?: string;
  administradorId?: string;
}

export interface UpdateGrupoData {
  nome?: string;
  descricao?: string;
  criadoPorId?: bigint;
  administradorId?: bigint;
}
