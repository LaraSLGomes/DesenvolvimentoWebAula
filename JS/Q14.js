const numerosParaSoma = [10, 20, 30, 40];

// acumulador é o valor total até o momento (começa em 0).
// valorAtual é o número que está sendo processado.
const somaTotal = numerosParaSoma.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual;
}, 0); 

console.log("Array para somar:", numerosParaSoma);
console.log("Soma de todos os números:", somaTotal);
