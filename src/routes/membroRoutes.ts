import { Router } from "express";
import * as membroController from "../controllers/membroController";

const router = Router();

router.get("/", membroController.list);

router.get("/:id", membroController.getById);

router.post("/", membroController.create);

router.put("/:id", membroController.update);

router.delete("/:id", membroController.remove);

export { router };
