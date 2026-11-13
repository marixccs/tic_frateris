import type { NextFunction, Request, Response } from "express";
import * as grupoService from "../services/grupoService";
import type { CreateGrupoDTO, UpdateGrupoDTO } from "../types/grupo";
import { obterCorpo, prepararJson } from "../utils/http";

export async function list(
  _req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const grupos = await grupoService.listar();
    res.json(prepararJson(grupos));
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
    const grupo = await grupoService.buscarPorId(req.params.id);
    res.json(prepararJson(grupo));
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
    const dados = obterCorpo<CreateGrupoDTO>(req.body);
    const grupo = await grupoService.criar(dados);
    res.status(201).json(prepararJson(grupo));
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
    const dados = obterCorpo<UpdateGrupoDTO>(req.body);
    const grupo = await grupoService.atualizar(req.params.id, dados);
    res.json(prepararJson(grupo));
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
    await grupoService.remover(req.params.id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
}
