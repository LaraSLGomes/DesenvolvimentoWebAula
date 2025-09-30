const botaoMudarTexto = document.getElementById('meuBotao');
const paragrafo = document.getElementById('meuParagrafo');

botaoMudarTexto.addEventListener('click', function() {
  // altera o conteúdo de texto do parágrafo quando o botão for clicado
  paragrafo.textContent = 'O texto foi alterado com sucesso!';
});