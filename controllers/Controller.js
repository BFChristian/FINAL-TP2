class Controller {
  constructor(service) {
    this.service = service;
  }
  getAll = async (req, res) => {
    const data = await this.service.getAll();
    res.status(200).send(data);
  };
  getById = async (req, res) => {
    const { id } = req.params;
    const data = await this.service.getById(id);
    res.status(200).send(data);
  };
  create = async (req, res) => {
    try {
      const { nombre } = req.body;
      const data = await this.service.create({ nombre });
      res.send(data);
    } catch (error) {
      res.status(400).send({
        message: error.message,
      });
    }
  };
}

export default Controller;
