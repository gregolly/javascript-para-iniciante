const cadaParagrafo = document.querySelectorAll('p');
console.log(cadaParagrafo)

cadaParagrafo.forEach((item) => {
  console.log(item)
})


//mostrar os textos
cadaParagrafo.forEach((item) => {
  console.log(item.innerText)
})

//corrigir erros

const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
}); 

let i = 0;

imgs.forEach(() => console.log(i++))

imgs.forEach(() => i++)