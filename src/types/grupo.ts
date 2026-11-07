export interface CreateGrupoDTO {
  nome: string;
  descricao?: string;
  criadoPorId: number;
  administradorId: number;
}

export interface UpdateGrupoDTO {
  nome?: string;
  descricao?: string;
}
