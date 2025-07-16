import { Router } from "express";
import avionContainer from "../container/avionContainer.js";
import avionMidlewareValidate from "../midlewares/avionMidlewareValidate.js";

const routes = Router();

routes.get("/", avionContainer.getAll);
routes.use(avionMidlewareValidate);
routes.post("/", avionContainer.crearOActualizar);

export default routes;
