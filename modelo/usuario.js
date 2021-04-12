class Usuario {
  constructor() {
    this.usuario = "administrador";
  }
  getUsuario() {
    return this.usuario;
  }
  setUsuario(user) {
    this.usuario = user;
  }
}

const usuario = new Usuario();

module.exports = usuario;
