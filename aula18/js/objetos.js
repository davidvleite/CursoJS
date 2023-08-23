/*const nome01 = 'Luiz';
const sobreNome01 = 'Miranda';
const idade01 = 23;

const nome02 = 'David';
const sobreNome02 = 'Luiz';
const idade02 = 21;*/

//OBJETO LITERAL
/*const pessoa1 = {
    nome : 'Luiz',
    sobrenome : 'Miranda',
    idade: 25
};
const pessoa2 = {
    nome : 'David',
    sobrenome : 'Leite',
    idade: 37
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);*/
// FUNÇÃO FACTORY = ELA CRIA OBJETOS.
/*function criaPessoa (nome, sobrenome, idade){
    return{
        nome :nome,
        sobrenome :sobrenome,
        idade : idade
    };
}

const pessoa1 = criaPessoa('Luiz', 'Gabriel', 16);
const pessoa2 = criaPessoa('David', 'Gabriel', 16);
const pessoa3 = criaPessoa('Marcela', 'Gabriel', 16);
const pessoa4 = criaPessoa('Maria', 'Gabriel', 16);
const pessoa5 = criaPessoa('Julia', 'Gabriel', 16);

console.log(pessoa1.nome,pessoa2.nome);*/

const pessoa1 = {
    nome : 'Luiz',
    sobrenome: 'Miranda',
    idade: 23,
    fala(){ //metodo
        console.log(`A minha idade atual é ${this.idade}.`);        
    },
    incrementaIdade(){
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();




