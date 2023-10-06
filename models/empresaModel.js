class Empresa {
    constructor(id, nombre, ubicacion, telefono, descripcion, horario, tipoEmpresa, idCategoria) {
      this.id = id;
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