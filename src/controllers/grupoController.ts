import { Request, Response } from "express";
import * as grupoService from "../services/grupoService";

export async function list(req: Request, res: Response) {
  const grupos = await grupoService.listar();

  res.json(grupos);
}

export async function getById(req: Request, res: Response) {
  const id = Number(req.params.id);

  const grupo = await grupoService.buscarPorId(id);

  res.json(grupo);
}

export async function create(req: Request, res: Response) {
  const grupo = await grupoService.criar(req.body);

  res.status(201).json(grupo);
}

export async function update(req: Request, res: Response) {
  const id = Number(req.params.id);

  const grupo = await grupoService.atualizar(id, req.body);

  res.json(grupo);
}

export async function remove(req: Request, res: Response) {
  const id = Number(req.params.id);

  await grupoService.remover(id);

  res.status(204).send();
}
