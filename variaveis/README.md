# Javascript

- `var` - Usamos para declar variáveis.

```
var = nomeVariavel;
```

Podemos declarar varias variáveis em uma mesma linha. 

-------

```
var sobrenome = 'frança',
      cidade = 'tangará';
```
---
No javascript o código são sempre movidos para cima, porém o valor atribuído não é movido.


---

```
var comida;
console.log(comida);
comida = 'Pizza';
console.log(comida);
 ```

 Também podemos alterar o valor de variáveis declaradas com "var" e "let", mas nunca com "const".

---

```
 var time = 'vasco';
 console.log(time);
 time = 'flamengo';
 console.log(time);

 let animal = 'dog';
 console.log(animal);
 animal = 'cat';
 console.log(animal);

 const address = 'tijuca';
 console.log(address);
 address = 'botafogo';
 console.log(address);
 ```

# Tipos de dados

Existem 7 tipos de dados no javascript, `string`, `number`, `booelan`, `undefined`, `null`, `symbol`, `object`. Todos são primitivos execetos os objetovs.(primitos são dados imutáveis.)

