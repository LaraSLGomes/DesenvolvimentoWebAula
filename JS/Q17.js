const url = 'link.localstorage';

fetch(url)
  .then(response => response.json())
  .then(data => {
    // mostra o objeto de dados inteiro no console
    console.log('Dados do usuário recebido:', data);

    // mostra apenas o nome do usuário no console
    console.log('Nome do usuário:', data.name);
  })
  .catch(error => {
    console.error('Ocorreu um erro na requisição:', error);
  });