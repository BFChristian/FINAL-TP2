class avionServices {
  data = [
    { id: "AAA001", xa: 0, ya: 0, za: 0 }
  ];

  getAll = async () => {
    return this.data;
  };

  crearOActualizar = async (avionIngresado) => {
    const index = this.data.findIndex((item) => item.id === avionIngresado.id);

    if (index !== -1) {
      this.data[index] = avionIngresado;
    } else {
      this.data.push(avionIngresado);
    }
    const alertas = [];

    for (const otro of this.data) {
      if (otro.id !== avionIngresado.id) {
        const dx = avionIngresado.xa - otro.xa;
        const dy = avionIngresado.ya - otro.ya;
        const dz = avionIngresado.za - otro.za;

        const d = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (d < 500) {
          alertas.push({
            alerta: `Alerta de proximidad entre ${avionIngresado.id} y ${otro.id}`
          });
        }
      }
    }

    return {
      mensaje: "avion ingresado o actualizado correctamente",
      alertas
    };
  };
}

export default avionServices;
