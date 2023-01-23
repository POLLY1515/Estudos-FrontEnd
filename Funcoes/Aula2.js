const list1 = [1,2,3,4];
const list2 = [];
const nomes = ["Maria","João","Ana Bela"]; 
//map:Aplica uma funçaõ a cada elemento da coleção original ,retornando uma nova coleção com 
//os elementos alterados

function dobro(x){
  return x * 2;
}

function triplo(x){
    return x * 3;
}


const m1 = list1.map(dobro);
const m2 = list1.map(triplo);
console.log("Map-----------------------");
console.log(m1);
console.log(m2);

//-----------------------------------------------------------
//filter:Retorna uma nova coleção ,contendo apenas aqueles elementos da coleção original que 
//satisfazem um dado predicado

function par (x){
    return x % 2 == 0;
}//essa função retorna os numeros pares ou se é par ou não


const f1 = list1.filter(par);
const f2 =list1.filter(x => x > 2);
console.log(par(9));
console.log("Filter---------------------------");
console.log(f1);
console.log(f2);

//reduce:Aplica cumulativamente uma função aos elementos de uma coleção,retornando o resultado
//final cumulativo.

function soma (x,y){
    return x + y;
}

function produto (x,y){
    return x * y;
}

const r1 = list1.reduce(soma);
const r2 = list1.reduce(produto);
console.log("Recuce---------------------");
console.log(r1);
console.log(r2);

//sort:Ordena a coleção conforme a função de comparação informada como parametro


const s1 = nomes.sort();
console.log("sort-------------");
console.log(s1);
