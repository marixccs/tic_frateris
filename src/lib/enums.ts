// Enums extraidos dos arquivos Java.
// No schema.prisma, os campos correspondentes continuam String porque o Java
// usa EnumType.STRING => VARCHAR, nao enum nativo do PostgreSQL.

export const DecisaoConselho = {
  PENDENTE: "PENDENTE",
  APROVADA: "APROVADA",
  REPROVADA: "REPROVADA",
} as const;

export type DecisaoConselho = (typeof DecisaoConselho)[keyof typeof DecisaoConselho];

export const StatusFuncaoUsuario = {
  ATIVA: "ATIVA",
  INATIVA: "INATIVA",
} as const;

export type StatusFuncaoUsuario = (typeof StatusFuncaoUsuario)[keyof typeof StatusFuncaoUsuario];

export const StatusJustificativa = {
  PENDENTE: "PENDENTE",
  ACEITA: "ACEITA",
  RECUSADA: "RECUSADA",
} as const;

export type StatusJustificativa = (typeof StatusJustificativa)[keyof typeof StatusJustificativa];

export const StatusMembro = {
  ATIVO: "ATIVO",
  INATIVO: "INATIVO",
  AFASTADO: "AFASTADO",
} as const;

export type StatusMembro = (typeof StatusMembro)[keyof typeof StatusMembro];

export const StatusPresenca = {
  PRESENTE: "PRESENTE",
  AUSENTE: "AUSENTE",
  JUSTIFICADA: "JUSTIFICADA",
} as const;

export type StatusPresenca = (typeof StatusPresenca)[keyof typeof StatusPresenca];

export const StatusReuniao = {
  AGENDADA: "AGENDADA",
  REALIZADA: "REALIZADA",
  CANCELADA: "CANCELADA",
} as const;

export type StatusReuniao = (typeof StatusReuniao)[keyof typeof StatusReuniao];

export const TipoDocumento = {
  ATA: "ATA",
  RELATORIO: "RELATORIO",
  COMPROVANTE: "COMPROVANTE",
  FICHA_MEMBRO: "FICHA_MEMBRO",
} as const;

export type TipoDocumento = (typeof TipoDocumento)[keyof typeof TipoDocumento];

export const TipoEntrada = {
  CONTRIBUICAO: "CONTRIBUICAO",
  DOACAO: "DOACAO",
  OUTRA: "OUTRA",
} as const;

export type TipoEntrada = (typeof TipoEntrada)[keyof typeof TipoEntrada];

export const TipoSaida = {
  COMPRA: "COMPRA",
  PAGAMENTO: "PAGAMENTO",
  OUTRA: "OUTRA",
} as const;

export type TipoSaida = (typeof TipoSaida)[keyof typeof TipoSaida];

export const TipoSolicitacao = {
  MUDANCA_ETAPA: "MUDANCA_ETAPA",
  AFASTAMENTO: "AFASTAMENTO",
  DESLIGAMENTO: "DESLIGAMENTO",
  OUTRA: "OUTRA",
} as const;

export type TipoSolicitacao = (typeof TipoSolicitacao)[keyof typeof TipoSolicitacao];
