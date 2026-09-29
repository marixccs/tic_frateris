import "dotenv/config";

import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";

import { errorHandler } from "./middlewares/errorHandler";
import { router as membroRoutes } from "./routes/membroRoutes";
import { router as grupoRoutes } from "./routes/grupoRoutes";
import { swaggerSpec } from "./config/swagger";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "API noire" });
});

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/membros", membroRoutes);
app.use("/grupos", grupoRoutes);

app.use(errorHandler);

app.listen(3000);