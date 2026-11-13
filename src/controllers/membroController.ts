import type { NextFunction, Request, Response } from "express";
import * as membroService from "../services/membroService";
import type { CreateMembroDTO, UpdateMembroDTO } from "../types/membro";
import { obterCorpo, prepararJson } from "../utils/http";

export async function list(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const membros = await membroService.listar();
    res.json(prepararJson(membros));
  } catch (error) {
    next(error);
  }
}

export async function getById(
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const membro = await membroService.buscarPorId(req.params.id);
    res.json(prepararJson(membro));
  } catch (error) {
    next(error);
  }
}

export async function create(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const dados = obterCorpo<CreateMembroDTO>(req.body);
    const membro = await membroService.criar(dados);
    res.status(201).json(prepararJson(membro));
  } catch (error) {
    next(error);
  }
}

export async function update(
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const dados = obterCorpo<UpdateMembroDTO>(req.body);
    const membro = await membroService.atualizar(req.params.id, dados);
    res.json(prepararJson(membro));
  } catch (error) {
    next(error);
  }
}

export async function remove(
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    await membroService.remover(req.params.id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
}
