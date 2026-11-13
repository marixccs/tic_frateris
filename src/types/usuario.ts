export interface CreateUsuarioDTO {
  nome: string;
  dataNascimento: string;
  cpf: string;
  login: string;
  senha: string;
  ativo: boolean;
}

export interface CreateUsuarioData {
  nome: string;
  dataNascimento: Date;
  cpf: string;
  login: string;
  senha: string;
  ativo: boolean;
}

export interface UpdateUsuarioDTO {
  nome?: string;
  dataNascimento?: string;
  cpf?: string;
  login?: string;
  senha?: string;
  ativo?: boolean;
}

export interface UpdateUsuarioData {
  nome?: string;
  dataNascimento?: Date;
  cpf?: string;
  login?: string;
  senha?: string;
  ativo?: boolean;
}
