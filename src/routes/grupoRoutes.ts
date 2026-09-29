import { Router } from "express";
import * as grupoController from "../controllers/grupoController";

const router = Router();

/**
 * @openapi
 * /grupos:
 *   get:
 *     tags: [Grupos]
 *     summary: Lista todos os grupos
 *     responses:
 *       200:
 *         description: Lista de grupos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Grupo'
 */
router.get("/", grupoController.list);

/**
 * @openapi
 * /grupos/{id}:
 *   get:
 *     tags: [Grupos]
 *     summary: Busca um grupo pelo ID
 *     parameters:
 *       - $ref: '#/components/parameters/IdPath'
 *     responses:
 *       200:
 *         description: Grupo encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Grupo'
 *       400:
 *         description: Id do grupo inválido
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Erro'
 *       404:
 *         description: Grupo não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Erro'
 */
router.get("/:id", grupoController.getById);

/**
 * @openapi
 * /grupos:
 *   post:
 *     tags: [Grupos]
 *     summary: Cria um grupo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateGrupo'
 *     responses:
 *       201:
 *         description: Grupo criado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Grupo'
 *       400:
 *         description: Nome ausente/vazio ou status inválido
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Erro'
 *       409:
 *         description: Já existe um grupo com esse nome
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Erro'
 */
router.post("/", grupoController.create);

/**
 * @openapi
 * /grupos/{id}:
 *   put:
 *     tags: [Grupos]
 *     summary: Atualiza um grupo
 *     parameters:
 *       - $ref: '#/components/parameters/IdPath'
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateGrupo'
 *     responses:
 *       200:
 *         description: Grupo atualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Grupo'
 *       400:
 *         description: Id inválido, nome vazio ou status inválido
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Erro'
 *       404:
 *         description: Grupo não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Erro'
 *       409:
 *         description: Já existe um grupo com esse nome
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Erro'
 */
router.put("/:id", grupoController.update);

/**
 * @openapi
 * /grupos/{id}:
 *   delete:
 *     tags: [Grupos]
 *     summary: Remove um grupo
 *     parameters:
 *       - $ref: '#/components/parameters/IdPath'
 *     responses:
 *       204:
 *         description: Grupo removido (sem corpo)
 *       400:
 *         description: Id do grupo inválido
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Erro'
 *       404:
 *         description: Grupo não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Erro'
 */
router.delete("/:id", grupoController.remove);

export { router };