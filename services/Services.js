import { v4 as uuidv4 } from "uuid";

class Service {
  data = [
    { id: 1, nombre: "osval" },
    { id: 2, nombre: "Canela" },
  ];

  getAll = async () => {
    return this.data;
  };
  getById = async (id) => {
    return this.data[id];
  };

  create = async (data) => {
    this.data.push({
      id: uuidv4(),
      nombre: data.nombre,
    });
    return this.data[this.data.length - 1];
  };
}

export default Service;
