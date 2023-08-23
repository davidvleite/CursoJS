//RETORNAR VALORES > 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

function callbackFilter(valor) {
  return valor > 10;
  
 /*   if (valor> 10) {
        return true;
    } else {
        return false;
    */
}
const numerosFiltrados = numeros.filter(callbackFilter);
console.log(numerosFiltrados);
//******************************************************************************************* //

//RETORNAR VALORES > 10

const numeros2 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosFiltrados2 = numeros2.filter(function(valor) {
    return valor >10;
});
console.log(numerosFiltrados2);

//******************************************************************************************* //
//RETORNAR VALORES > 10 arrow

const numeros3 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosFiltrados3 = numeros3.filter(valor => valor > 10);
console.log(numerosFiltrados3);

//******************************************************************************************* */
//PEGANDO OBEJOS E ATRIBUTOS COM O NOME COM MAIS DE 4 LETRAS

const pessoas = [
    {nome: 'Luiz', idade: 16},
    {nome: 'Maria', idade: 7},
    {nome: 'Marcela', idade: 39},
    {nome: 'David', idade: 36},
    {nome: 'Nick', idade: 10},
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length > 4);
console.log(pessoasComNomeGrande);

const pessoasComIdadeMaiorQueSete = pessoas.filter(obj =>  obj.idade > 7);
console.log(pessoasComIdadeMaiorQueSete);
//********************************************************************************************* */
//PESSOAS QUE TERMINAM COM A LETRA A
const pessoaQueTerminaONomeComLetraA = pessoas.filter(obj => {
    return obj.nome.toLowerCase().endsWith('a');
});
console.log(pessoaQueTerminaONomeComLetraA);


