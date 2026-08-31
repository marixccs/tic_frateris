import { Request, Response } from "express";
import * as membroService from "../services/membroService";

export async function list(req: Request, res: Response) {
  const membros = await membroService.listar();

  return res.json(membros);
}

export async function getById(req: Request, res: Response) {
  const id = Number(req.params.id);

  const membro = await membroService.buscarPorId(id);

  if (!membro) {
    return res.status(404).json({
      message: "Membro não encontrado",
    });
  }

  return res.json(membro);
}

export async function create(req: Request, res: Response) {
  const membro = await membroService.criar(req.body);

  return res.status(201).json(membro);
}

export async function update(req: Request, res: Response) {
  const id = Number(req.params.id);

  const membro = await membroService.atualizar(id, req.body);

  return res.json(membro);
}

export async function remove(req: Request, res: Response) {
  const id = Number(req.params.id);

  await membroService.remover(id);

  return res.status(204).send();
}