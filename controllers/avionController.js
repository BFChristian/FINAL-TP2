class avionController {
  constructor(service) {
    this.service = service;
  }
  getAll = async (req, res) => {
    const data = await this.service.getAll();
    res.status(200).send(data);
  };
  crearOActualizar = async (req, res) => {
    try {
      const data = await this.service.crearOActualizar(req.body);
      res.send(data);
    } catch (error) {
      res.status(400).send({
        message: error.message,
      });
    }
  };
}

export default avionController;
