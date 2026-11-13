import path from "path";
import swaggerJsdoc from "swagger-jsdoc";

const idSchema = {
  type: "string",
  pattern: "^[1-9][0-9]*$",
  example: "1",
  description: "Identificador inteiro positivo (BigInt no PostgreSQL), representado como string no JSON.",
};

const dataEntrada = {
  type: "string",
  format: "date",
  example: "2024-02-10",
};

const dataResposta = {
  type: "string",
  format: "date-time",
  example: "2024-02-10T00:00:00.000Z",
};

const statusMembro = {
  type: "string",
  enum: ["ATIVO", "INATIVO", "AFASTADO"],
  example: "ATIVO",
};

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API TIC Frateris",
      version: "1.1.0",
      description: "Documentação dos endpoints de membros e grupos. IDs BigInt são enviados e recebidos como strings no JSON. O cadastro de membro também cria o registro de Pessoa; a participação em grupos é gerenciada separadamente.",
    },
    servers: [{ url: "http://localhost:3000" }],
    tags: [
      { name: "Membros", description: "Gerenciamento de membros e dados pessoais" },
      { name: "Grupos", description: "Gerenciamento de grupos" },
    ],
    components: {
      schemas: {
        Erro: {
          type: "object",
          required: ["message"],
          properties: {
            message: { type: "string", example: "Mensagem do erro" },
          },
        },
        Pessoa: {
          type: "object",
          required: ["id", "nome", "dataNascimento", "cpf"],
          properties: {
            id: idSchema,
            nome: { type: "string", maxLength: 100, example: "Maria Silva" },
            dataNascimento: { ...dataResposta, example: "1995-04-20T00:00:00.000Z" },
            cpf: { type: "string", maxLength: 14, example: "12345678900" },
          },
        },
        GrupoResumo: {
          type: "object",
          required: ["id", "nome", "descricao", "criadoPorId", "administradorId"],
          properties: {
            id: idSchema,
            nome: { type: "string", maxLength: 100, example: "Grupo de Jovens" },
            descricao: { type: "string", maxLength: 500, example: "Encontros aos sábados" },
            criadoPorId: idSchema,
            administradorId: idSchema,
          },
        },
        MembroResumo: {
          type: "object",
          required: ["id", "statusMembro", "dataIngresso", "cadastradoPorId", "pessoa"],
          properties: {
            id: idSchema,
            observacao: { type: "string", nullable: true, maxLength: 500, example: "Prefere contato por e-mail" },
            statusMembro,
            dataIngresso: dataResposta,
            cadastradoPorId: idSchema,
            pessoa: { $ref: "#/components/schemas/Pessoa" },
          },
        },
        ParticipacaoGrupo: {
          type: "object",
          required: ["id", "dataEntrada", "membroId", "grupoId"],
          properties: {
            id: idSchema,
            dataEntrada: dataResposta,
            dataSaida: { ...dataResposta, nullable: true, example: null },
            observacao: { type: "string", nullable: true, maxLength: 500, example: null },
            membroId: idSchema,
            grupoId: idSchema,
          },
        },
        ParticipacaoComGrupo: {
          allOf: [
            { $ref: "#/components/schemas/ParticipacaoGrupo" },
            {
              type: "object",
              required: ["grupo"],
              properties: { grupo: { $ref: "#/components/schemas/GrupoResumo" } },
            },
          ],
        },
        ParticipacaoComMembro: {
          allOf: [
            { $ref: "#/components/schemas/ParticipacaoGrupo" },
            {
              type: "object",
              required: ["membro"],
              properties: { membro: { $ref: "#/components/schemas/MembroResumo" } },
            },
          ],
        },
        Grupo: {
          allOf: [
            { $ref: "#/components/schemas/GrupoResumo" },
            {
              type: "object",
              description: "A propriedade participacoes é incluída na consulta por ID; listagem, criação e atualização retornam os campos básicos do grupo.",
              properties: {
                participacoes: {
                  type: "array",
                  items: { $ref: "#/components/schemas/ParticipacaoComMembro" },
                },
              },
            },
          ],
        },
        CreateGrupo: {
          type: "object",
          required: ["nome", "descricao", "criadoPorId", "administradorId"],
          properties: {
            nome: { type: "string", maxLength: 100, example: "Grupo de Jovens" },
            descricao: { type: "string", maxLength: 500, example: "Encontros aos sábados" },
            criadoPorId: idSchema,
            administradorId: idSchema,
          },
        },
        UpdateGrupo: {
          type: "object",
          properties: {
            nome: { type: "string", maxLength: 100, example: "Grupo de Jovens" },
            descricao: { type: "string", maxLength: 500, example: "Nova descrição" },
            criadoPorId: idSchema,
            administradorId: idSchema,
          },
        },
        Membro: {
          allOf: [
            { $ref: "#/components/schemas/MembroResumo" },
            {
              type: "object",
              required: ["participacoes"],
              properties: {
                participacoes: {
                  type: "array",
                  description: "Histórico de participações; o vínculo com grupos não é um campo direto de Membro.",
                  items: { $ref: "#/components/schemas/ParticipacaoComGrupo" },
                },
              },
            },
          ],
        },
        CreateMembro: {
          type: "object",
          required: ["nome", "dataNascimento", "cpf", "statusMembro", "dataIngresso", "cadastradoPorId"],
          properties: {
            nome: { type: "string", maxLength: 100, example: "Maria Silva" },
            dataNascimento: { ...dataEntrada, example: "1995-04-20" },
            cpf: { type: "string", maxLength: 14, example: "12345678900" },
            observacao: { type: "string", nullable: true, maxLength: 500, example: "Prefere contato por e-mail" },
            statusMembro,
            dataIngresso: dataEntrada,
            cadastradoPorId: idSchema,
          },
        },
        UpdateMembro: {
          type: "object",
          properties: {
            nome: { type: "string", maxLength: 100, example: "Maria Silva" },
            dataNascimento: { ...dataEntrada, example: "1995-04-20" },
            cpf: { type: "string", maxLength: 14, example: "12345678900" },
            observacao: { type: "string", nullable: true, maxLength: 500, example: "Atualizado" },
            statusMembro,
            dataIngresso: dataEntrada,
            cadastradoPorId: idSchema,
          },
        },
      },
      parameters: {
        IdPath: {
          name: "id",
          in: "path",
          required: true,
          schema: idSchema,
          description: "ID do registro; enviar como número inteiro positivo em formato textual.",
        },
      },
    },
  },
  apis: [path.join(__dirname, "../routes/*.{ts,js}").replace(/\\/g, "/")],
};

export const swaggerSpec = swaggerJsdoc(options);
