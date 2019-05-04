// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href=^"#"]');

function handleLinksInternos(event){
  event.preventDefault();
  linksInternos.forEach((item) =>{
    item.classList.remove('ativo');
  });
  event.currentTarget.classList.add('ativo');
}
linksInternos.forEach((link) =>{
  link.addEventListener('click', handleLinksInternos);
});



// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const todosElementos = document.querySelectorAll('body *');

function handleElement(event){
  //console.log(event.target);
  event.currentTarget.remove();
}
todosElementos.forEach((element) =>{
  element.addEventListener('click', handleElement);
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento


// Se o usuário clicar na tecla (t), aumente todo o texto do site.
function handleKeyBoard(event){
  if(event.key = 't'){
    document.documentElement.classList.toggle('textomaior');
  }
}
window.addEventListener('keydown', handleKeyBoard);