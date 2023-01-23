const valores = [1,5,8,0,3,55];
//exibindo o tamanho do array
console.log(`Length:${valores.length}`);

//Removendo elementos 
const nomes = ["Maria","Ana","Bianca","Elizety"];
const n1 = nomes.pop();
console.log(`Elemento removido:${n1}`);
console.log(nomes);

const nomes2 = ["Bia","Catia","Poliana"];
const n2 = nomes2.shift();
console.log(`Elemento removido:${n2}`);
console.log(nomes2);

//Inserindo elemento no fim do array
nomes2.push("Beatriz");
console.log(nomes2);

//Inserindo elemento no começo do array
nomes2.unshift("Marcos");
console.log(nomes2);

//Unindo os arrays
const meninas = ["Paloma","Fabiana","Roberta"];
const meninos = ["Henrique", "Miguel","Fabio"];
const todos = meninas.concat(meninos);
console.log(`Todos:${todos}`);

console.log("Percorrendo elementos");
const frutas = ["Banana","Melancia","Abacate","Uva","Pera"];

console.log("Percorrendo array com for");
for(let i = 0; i < frutas.length;i++){
    console.log(frutas[i]);
}
console.log("Percorrendo array com for each");
frutas.forEach(item =>{
    console.log(item);
});