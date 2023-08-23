//AULA DE MAP
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosEmDobro = numeros.map(function(valor) {
    return valor * 2;
});
console.log(numerosEmDobro);


//******************************************************************************************* //

//RETORNE APENAS UMA STRING COM O NOME DA PESSOA

const pessoas = [
    {nome: 'Luiz', idade: 16},
    {nome: 'Maria', idade: 7},
    {nome: 'Marcela', idade: 39},
    {nome: 'David', idade: 36},
    {nome: 'Nick', idade: 10},
];

const nome = pessoas.map(obj => obj.nome);
console.log(nome);
// REMOVA A CHAVE NOME RETORNANDO SO A IDADE
const idade = pessoas.map(obj => ({idade: obj.idade}));
console.log(idade);

//ADD ID EM CADA OBJ 
const comIds = pessoas.map(function(obj, indice){
    obj.id = (indice + 1) * 10;
    return obj;
});

console.log(comIds);
