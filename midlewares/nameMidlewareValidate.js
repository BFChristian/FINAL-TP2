const nameMidlewareValidate = async (req, res, next) => {
  const { nombre } = req.body;
  if (!nombre) {
    res.status(404).send({ message: "falta el nombre" });
    return;
  }
  next();
};

export default nameMidlewareValidate
