const avionMidlewareValidate = async (req, res, next) => {
  const { id, xa, ya, za } = req.body;
  if (!id || xa == null || ya == null || za == null) {
    res.status(404).send({ message: "faltan datos" });
    return;
  }

  const tieneCaracteresEspeciales = /[^a-zA-Z0-9\s]/.test(id);

  if (typeof id !== "string" || id.length !== 6 || tieneCaracteresEspeciales || typeof xa !== "number" || typeof ya !== "number" || typeof za !== "number") {
    res.status(400).send({ message: "datos no válidos" });
    return;
  }
  next();
};

export default avionMidlewareValidate
