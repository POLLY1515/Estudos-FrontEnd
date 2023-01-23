console.log("Uma String literal pod eficar entre aspas duplas");
console.log('Uma String literal pod eficar entre aspas simples');
console.log(`Uma String literal pode ficar entre crases`);
const valor = 50.7;
console.log(`O valor do produto é ${valor}`);

//Convertendo um numero para string
 const str1 = valor.toString();
 console.log(`O tipo de ${str1} é ${typeof str1}`);

 //ToFixed ,especifica a quantidade de casas decimais que ira aparecer

 const str2 = valor.toFixed(2);
 console.log(`O tipo de ${str2} é ${typeof str2}`);

 //Convertendo String para numero

 const num1 = Number("23.90");
 console.log(`Tipo de ${num1} è: ${typeof num1}`);

 //O parseInt pega uma string e converte para numero

 const num2 = parseInt("79");
 console.log(`Tipo de ${num2} : ${typeof num2}`);

//Algumas funçoes de strings

const nome = "POLIANA BEATRIZ";

const resultado = nome.toLowerCase();
console.log(`Imprimindo tudo minúsculo : ${resultado}`);

const nome2 = "Isaias machado";
const result = nome2.toUpperCase();
console.log(`Imprimindo tudo maiúsculo : ${result}`);
console.log(`Passando a posição  ${nome.charAt(5)}`);

const nome3 = "Maria";
//trocando o primeiro a por e
console.log(`${nome3.replace("a","e")}`);

const palavra = "Paralelepipedo";
//trocando todos os e por a
console.log(`Exibindo palavra modificada:${palavra.replace(/e/g, "a")}`);
//Mostrando a quantidade de caracter da string
console.log(`Length:${palavra.length}`);
//retornando a primeira ocorrencia
console.log(`Indexof:${palavra.indexOf("a")}`);
//retornando a ultima ocorrencia
console.log(`LastIndexOf:${palavra.lastIndexOf("a")}`);
//recortando a string
console.log(`Cortando a string:${palavra.substring(4)}`);
console.log(`Cortando a string:${palavra.substring(4 ,8)}`);

