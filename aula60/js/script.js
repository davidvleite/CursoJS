//AULA DE REDUCE = REDUZ UM ARRAY A UM ÚNICO VALOR
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce(function(acumulador, valor, indice, array) {
    acumulador += valor;
    return acumulador;
},0);
console.log(total);


//******************************************************************************************* //
//RETORNE UM ARRAY COM OS PARES
const total1 = numeros.reduce(function(acumulador, valor, indice, array) {
    if(valor % 2 === 0) acumulador.push(valor);
    return acumulador;
    },[]);
console.log(total1);

//******************************************************************************************* //

//RETORNE UM ARRAY COM O DOBRO DE VALORES
const total2 = numeros.reduce(function(acumulador, valor, indice, array) {
    acumulador.push(valor * 2);
    return acumulador;
    },[]);
console.log(total2);



/*

const pessoas = [
    {nome: 'Luiz', idade: 16},
    {nome: 'Maria', idade: 7},
    {nome: 'Marcela', idade: 39},
    {nome: 'David', idade: 36},
    {nome: 'Nick', idade: 10},
];

const nome = pessoas.map(obj => obj.nome);
console.log(nome);
const idade = pessoas.map(obj => ({idade: obj.idade}));
console.log(idade);

const comIds = pessoas.map(function(obj, indice){
    obj.id = (indice + 1) * 10;
    return obj;
});

console.log(comIds);
*/