const numeros = [1, 2, 3, 4, 5, 10];

function multiplicarPorDois(arrayDeNumeros) {
  // .map() passa por cada número do array, dps retorna um NOVO array com os resultados.
  const novoArray = arrayDeNumeros.map(numero => numero * 2);
  return novoArray;
}

// armazena o resultado
const numerosMultiplicados = multiplicarPorDois(numeros);

console.log("Array Original:", numeros);
console.log("Novo Array (multiplicado por 2):", numerosMultiplicados);