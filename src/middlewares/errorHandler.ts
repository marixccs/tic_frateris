import { Request, Response, NextFunction } from "express";
import { AppError } from "./AppError";

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }

  console.error(err);

  return res.status(500).json({
    message: "Erro interno",
  });
}

// info das requisições - reg 
// res - manda resposta para o usuário através dessa resposta 
// console.error vai aparecer no backend e não no frontend 
// senão for resposta de erro, vai mandar 500 e mensagem de erro interno para o usuário