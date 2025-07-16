import Service from "../services/services.js";
import Controller from "../controllers/controller.js";

const service= new Service()
const controller = new Controller(service)

export default controller