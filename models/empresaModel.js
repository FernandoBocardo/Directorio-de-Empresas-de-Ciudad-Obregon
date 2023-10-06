class Empresa {
    constructor(nombre, ubicacion, telefono, descripcion, horario, tipoEmpresa, idCategoria) {
      this.nombre = nombre;
      this.ubicacion = ubicacion;
      this.telefono = telefono;
      this.descripcion = descripcion;
      this.horario = horario;
      this.tipoEmpresa = tipoEmpresa;
      this.idCategoria = idCategoria;
    }
  }
  
  module.exports = Empresa;