export interface CreateFuncaoDTO {
  nome: string;
  descricao?: string | null;
}

export interface CreateFuncaoData {
  nome: string;
  descricao?: string | null;
}

export interface UpdateFuncaoDTO {
  nome?: string;
  descricao?: string | null;
}

export interface UpdateFuncaoData {
  nome?: string;
  descricao?: string | null;
}
