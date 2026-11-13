import type { TipoDocumento } from "../lib/enums";

export interface CreateDocumentoDTO {
  descricao: string;
  tipo: TipoDocumento;
  nomeArquivo: string;
  geradoPorId: string;
  reuniaoId?: string | null;
  grupoId?: string | null;
  solicitacaoId?: string | null;
}

export interface CreateDocumentoData {
  descricao: string;
  tipo: TipoDocumento;
  nomeArquivo: string;
  geradoPorId: bigint;
  reuniaoId?: bigint | null;
  grupoId?: bigint | null;
  solicitacaoId?: bigint | null;
}

export interface UpdateDocumentoDTO {
  descricao?: string;
  tipo?: TipoDocumento;
  nomeArquivo?: string;
  geradoPorId?: string;
  reuniaoId?: string | null;
  grupoId?: string | null;
  solicitacaoId?: string | null;
}

export interface UpdateDocumentoData {
  descricao?: string;
  tipo?: TipoDocumento;
  nomeArquivo?: string;
  geradoPorId?: bigint;
  reuniaoId?: bigint | null;
  grupoId?: bigint | null;
  solicitacaoId?: bigint | null;
}
