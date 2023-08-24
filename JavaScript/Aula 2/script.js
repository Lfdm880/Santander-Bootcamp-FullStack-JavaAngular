// tipos prmitivos

//Bolean
var vOuF = false;

console.log(vOuF);
console.log(typeof(vOuF)); //usada para saber o tipo da variável

//Number
var qualquerNumero = 3;

console.log(qualquerNumero);
console.log(typeof(qualquerNumero));

//String
var nome= ' Lucas'; //entre aspas por ser uma string
console.log(nome);
console.log(typeof(nome))

//escopo

var escopoglobal = 'global';
console.log(escopoglobal);

function escopoLocal(){
    let escopolocalInterno = 'local'
    console.log(escopolocalInterno);
}

escopoLocal();

//Operadores aritimétricos

console.log(2+4);
console.log(7-2);
console.log(3*5);
console.log(2%2); //calcula resto
