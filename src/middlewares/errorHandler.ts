import { Request, Response, NextFunction } from "express";
import { AppError } from "./AppError";

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      message: err.message,
    });
    return;
  }

  if (err instanceof SyntaxError) {
    res.status(400).json({
      message: "JSON inválido na requisição",
    });
    return;
  }

  console.error(err);

  res.status(500).json({
    message: "Erro interno",
  });
}
