import { Router } from "express";
import * as membroController from "../controllers/membroController";

const router = Router();

/**
 * @openapi
 * /membros:
 *   get:
 *     tags: [Membros]
 *     summary: Lista todos os membros
 *     description: Retorna os membros junto com o grupo de cada um.
 *     responses:
 *       200:
 *         description: Lista de membros
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Membro'
 */
router.get("/", membroController.list);

/**
 * @openapi
 * /membros/{id}:
 *   get:
 *     tags: [Membros]
 *     summary: Busca um membro pelo ID
 *     parameters:
 *       - $ref: '#/components/parameters/IdPath'
 *     responses:
 *       200:
 *         description: Membro encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Membro'
 *       400:
 *         description: ID inválido
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Erro'
 *       404:
 *         description: Membro não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Erro'
 */
router.get("/:id", membroController.getById);

/**
 * @openapi
 * /membros:
 *   post:
 *     tags: [Membros]
 *     summary: Cria um membro
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateMembro'
 *     responses:
 *       201:
 *         description: Membro criado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Membro'
 *       400:
 *         description: Dados inválidos ou JSON malformado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Erro'
 */
router.post("/", membroController.create);

/**
 * @openapi
 * /membros/{id}:
 *   put:
 *     tags: [Membros]
 *     summary: Atualiza um membro
 *     parameters:
 *       - $ref: '#/components/parameters/IdPath'
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateMembro'
 *     responses:
 *       200:
 *         description: Membro atualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Membro'
 *       400:
 *         description: Dados inválidos
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Erro'
 *       404:
 *         description: Membro não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Erro'
 */
router.put("/:id", membroController.update);

/**
 * @openapi
 * /membros/{id}:
 *   delete:
 *     tags: [Membros]
 *     summary: Remove um membro
 *     parameters:
 *       - $ref: '#/components/parameters/IdPath'
 *     responses:
 *       204:
 *         description: Membro removido (sem corpo)
 *       404:
 *         description: Membro não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Erro'
 */
router.delete("/:id", membroController.remove);

export { router };