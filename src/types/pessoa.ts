export interface CreatePessoaDTO {
  nome: string;
  dataNascimento: string;
  cpf: string;
}

export interface CreatePessoaData {
  nome: string;
  dataNascimento: Date;
  cpf: string;
}

export interface UpdatePessoaDTO {
  nome?: string;
  dataNascimento?: string;
  cpf?: string;
}

export interface UpdatePessoaData {
  nome?: string;
  dataNascimento?: Date;
  cpf?: string;
}
