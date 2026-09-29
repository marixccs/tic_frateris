import path from "path";
import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: { 
    openapi: "3.0.0",
    info: {
      title: "API Tic Frateris",
      version: "1.0.0",
      description: "Documentação das rotas de membros e grupos",
    },
    servers: [{ url: "http://localhost:3000" }],
    tags: [
      { name: "Membros", description: "Gerenciamento de membros" },
      { name: "Grupos", description: "Gerenciamento de grupos" },
    ],
    components: {
      schemas: {
        Erro: {
          type: "object",
          properties: {
            message: { type: "string", example: "Mensagem do erro" },
          },
        },
        StatusMembro: {
          type: "string",
          enum: ["ATIVO", "INATIVO", "INATIVO_TEMPORARIAMENTE"],
        },
        // AJUSTE: confira os valores reais do enum StatusGrupo no seu schema.prisma
        StatusGrupo: {
          type: "string",
          enum: ["ATIVO", "INATIVO"],
        },
        Grupo: {
          type: "object",
          properties: {
            id: { type: "integer", example: 1 },
            nome: { type: "string", example: "Grupo de Jovens" },
            descricao: { type: "string", nullable: true, example: "Encontros aos sábados" },
            statusGrupo: { $ref: "#/components/schemas/StatusGrupo" },
          },
        },
        CreateGrupo: {
          type: "object",
          required: ["nome"],
          properties: {
            nome: { type: "string", example: "Grupo de Jovens" },
            descricao: { type: "string", example: "Encontros aos sábados" },
            statusGrupo: { $ref: "#/components/schemas/StatusGrupo" },
          },
        },
        UpdateGrupo: {
          type: "object",
          properties: {
            nome: { type: "string", example: "Grupo de Jovens" },
            descricao: { type: "string", example: "Nova descrição" },
            statusGrupo: { $ref: "#/components/schemas/StatusGrupo" },
          },
        },
        Membro: {
          type: "object",
          properties: {
            id: { type: "integer", example: 1 },
            nome: { type: "string", example: "Maria Silva" },
            dataNascimento: { type: "string", format: "date", example: "1995-04-20" },
            cpf: { type: "string", example: "12345678900" },
            observacao: { type: "string", nullable: true, example: "Prefere contato por e-mail" },
            statusMembro: { $ref: "#/components/schemas/StatusMembro" },
            dataIngresso: { type: "string", format: "date", example: "2024-02-10" },
            grupo: {
              allOf: [{ $ref: "#/components/schemas/Grupo" }],
              nullable: true,
            },
          },
        },
        CreateMembro: {
          type: "object",
          required: ["nome", "dataNascimento", "cpf", "statusMembro", "dataIngresso"],
          properties: {
            nome: { type: "string", example: "Maria Silva" },
            dataNascimento: { type: "string", format: "date", example: "1995-04-20" },
            cpf: { type: "string", example: "12345678900" },
            observacao: { type: "string", example: "Prefere contato por e-mail" },
            statusMembro: { $ref: "#/components/schemas/StatusMembro" },
            dataIngresso: { type: "string", format: "date", example: "2024-02-10" },
          },
        },
        UpdateMembro: {
          type: "object",
          properties: {
            nome: { type: "string", example: "Maria Silva" },
            dataNascimento: { type: "string", format: "date", example: "1995-04-20" },
            cpf: { type: "string", example: "12345678900" },
            observacao: { type: "string", example: "Atualizado" },
            statusMembro: { $ref: "#/components/schemas/StatusMembro" },
            dataIngresso: { type: "string", format: "date", example: "2024-02-10" },
          },
        },
      },
      parameters: {
        IdPath: {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "integer", example: 1 },
          description: "ID do registro",
        },
      },
    },
  },
  // funciona tanto com tsx (.ts) quanto após o build (.js)
   apis: [path.join(__dirname, "../routes/*.{ts,js}").replace(/\\/g, "/")],
};

export const swaggerSpec = swaggerJsdoc(options as swaggerJsdoc.Options);