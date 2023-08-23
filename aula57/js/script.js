//FUNÇÃO CONSTRUTORA -> OBJETOS
//FUNÇÃO FABRICA -> OBJETOS
//CONSTRUROA -> PESSOA (NEW)

function Pessoa(nome, sobrenome) {
    //ATRIBUTOS E METODOS PRIVADOS
    const Id = 123456;
    const metodoInterno = function() {

    };

    //ATRIBITOS E METODOS PUCLICOS
    this.nome = nome;
    this.sobrenome  = sobrenome;
    this.metodo = function() {
        console.log(this.nome + ': sou um metodo');
    };
}

const p1 = new Pessoa('David', 'Leite');
const p2 = new Pessoa('Luiz', 'Leite');

console.log(p1.nome);
p2.metodo();

////// FUNÇÃO GERADORA //////

function* geradora() {
    // codigo qualquer ...
    yield 'Valor 1';
    // codigo qualquer ...
    yield 'Valor 2';    
}

const g1 = geradora1();
console.log(g1.next().value);
console.log(g1.next().value);

for (let valor of g1) {
    console.log(valor);
}

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

// FUNÇÃO GERADORA CHAMANDO OUTRA FUNÇAO
function* geradora() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
for (let valor of g4) {
    console.log(valor);
}

// FUNÇÃO RECURSIVA

function recursiva(max) {
    if (max >= 10) return;
    max++;
    console.log(max);
    recursiva(max);
}

recursiva(0);