const produtos = [
  { nome: "Caneta", preco: 15 },
  { nome: "Caderno", preco: 45 },
  { nome: "Mochila", preco: 75 }, 
  { nome: "Notebook", preco: 2500 }
];

// método find() retorna o PRIMEIRO elemento do array que satisfaz a condição, assim que ele encontra um, ele para de procurar.
const produtoEncontrado = produtos.find(produto => produto.preco > 50);

console.log("Lista de produtos:", produtos);
console.log("Primeiro produto com preço maior que 50:", produtoEncontrado);
