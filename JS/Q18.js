const usuario = {
  nome: "Lara",
  id: 123,
  ehAdmin: true
};

// converte o objeto para string JSON e salva
const usuarioString = JSON.stringify(usuario);
localStorage.setItem('dadosUsuario', usuarioString);
console.log("Objeto salvo no LocalStorage.");

// recupera a string do LocalStorage
const stringRecuperada = localStorage.getItem('dadosUsuario');

// converte a string de volta para um objeto e exibe no console
const usuarioRecuperado = JSON.parse(stringRecuperada);
console.log("Objeto recuperado:", usuarioRecuperado);