import { Router } from "express";
import controller from "../container/container.js";
import nameMidlewareValidate from "../midlewares/nameMidlewareValidate.js";

const routes = Router();

routes.get("/", controller.getAll);
routes.get("/:id", controller.getById);
routes.use(nameMidlewareValidate);
routes.post("/", controller.create);

export default routes;
