function formatarTempo(unidade) {
  return unidade < 10 ? '0' + unidade : unidade;
}

function atualizarRelogioNoConsole() {
  const agora = new Date();

  const horas = formatarTempo(agora.getHours());
  const minutos = formatarTempo(agora.getMinutes());
  const segundos = formatarTempo(agora.getSeconds());

  const horaFormatada = `${horas}:${minutos}:${segundos}`;

  console.clear();
  console.log(horaFormatada);
}

setInterval(atualizarRelogioNoConsole, 1000);