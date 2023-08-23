// const nome = 'Luiz';
// const sobrenome =  'Leite';

// const falaNome = () => nome + ' ' + sobrenome;

// // 
// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquerCoisa = 'O que eu quiser exportar';

// // console.log(module.exports);
// console.log(exports);

class Pessoa {
    constructor (nome) {
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;