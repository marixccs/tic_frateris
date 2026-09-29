import { Router } from "express";
import * as grupoController from "../controllers/grupoController";

const router = Router();

router.get("/", grupoController.list);

router.get("/:id", grupoController.getById);

router.post("/", grupoController.create);

router.put("/:id", grupoController.update);

router.delete("/:id", grupoController.remove);

export { router };
