//formas de declarar funções
function soma1(num1,num2){
    return num1 + num2;
}
//segunda forma
const soma2 = function(num1 ,num2){
    return num1 + nun2;
}
//terceira forma de declarar
const soma3 =(num1 ,num2) =>{
    return num1 + num2;
}
//quarta forma de declarar
const mult = (num1 ,num2) => num1 * num2;

//chamando a funcao  
console.log(soma1(3,9));
console.log(mult(9,7));

//Calculando area
//Variaveis declaradas dentro do escopo da função, nao vazam escopo
function areaCirculo (raio){
    const pi = 3.14;
    return pi * raio * raio;
}

console.log(areaCirculo(2));