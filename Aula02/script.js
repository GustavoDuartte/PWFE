let nomes = ["Fulano","Ciclano","Beltrano"];

let tam = nomes.length;

console.log(tam);

console.log(nomes);

let categorias = ["Futebol","Basquete","Volei"];

console.log(categorias.join("*"));

categorias.pop();
//pop sempre ira remover a ultima posição do vetor

console.log(categorias);

categorias.push("Natacao");
//push sempre ira adicionar uma nova informação ao vetor

console.log(categorias);

let pos = categorias.indexOf("Basquete");
//indexof serve para achar a posição do dado solicitado entre aspas no vetor

console.log(pos);

categorias.push("Bocha");

let novo = categorias.splice(pos,2);
//splice serve para recortar os itens solicitados em parenteses

console.log(novo);

console.log(categorias);

categorias.sort();
//sort serve para ordenar em ordem crescente os itens do vetor

categorias.reverse();
//reverse serve para ordenar em ordem decrescente

console.log(categorias)

console.log(Math.floor(0.95));
//Math. serve para quando for fazer contas, e querer arredondar algum resultado
//Math.floor serve para arredondar para baixo

console.log(Math.ceil(0.15));
//Math.ceil serve para arredondar para cima

console.log(Math.round(0.5));
//Math.round serve para arredondar para mais perto, tanto para baixo ou para cima

console.log(Math.random()*100);
//Math.random serve para gerar um numero aleatorio

console.log(Math.floor(Math.random()*100));
//Serve para gerar um numero aleatorio, e entao arredondar ele