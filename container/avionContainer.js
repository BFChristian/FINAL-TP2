import avionServices from "../services/avionServices.js";
import avionController from "../controllers/avionController.js";

const service= new avionServices()
const avionContainer = new avionController(service)

export default avionContainer