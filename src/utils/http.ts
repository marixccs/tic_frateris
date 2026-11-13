import { AppError } from "../middlewares/AppError";

export function obterCorpo<T>(corpo: unknown): T {
  if (corpo === null || typeof corpo !== "object" || Array.isArray(corpo)) {
    throw new AppError("O corpo da requisição deve ser um objeto JSON", 400);
  }

  return corpo as T;
}

export function prepararJson(dados: unknown): unknown {
  const json = JSON.stringify(dados, (_chave, valor) =>
    typeof valor === "bigint" ? valor.toString() : valor,
  );

  return json === undefined ? null : JSON.parse(json);
}
