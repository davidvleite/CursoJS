/*function criaPessoa (nome, sobrenome = 'Leite') {
    return {
        nome,
        sobrenome,
        idade : 36,
        fala: function(assunto) {
            return `${nome} ${sobrenome} tem ${this.idade} ${assunto}.`
        }        
    };
}
const pessoa1 = criaPessoa('David', 'Verissimo');
console.log(pessoa1.fala('e esta falando sobre JS'));*/


function criaP2 (nome, sobrenome , peso ,altura) {
    return {
        nome,
        sobrenome,
        peso,
        altura,
        get imc(){ //GETTER TRANSFORMA UMA FUNÇAO EM UM ATRIBUTO
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const pessoa2 = criaP2('Marcela', 'Santos', 60, 1.56);
//console.log(pessoa2, 'tem o IMC de ', pessoa2.imc());
//console.log(`${nome} ${sobrenome} seu peso atual é de ${peso} e sua altura é${altura} sendo seu IMC de`, pessoa2.imc);
console.log(pessoa2.nome, pessoa2.sobrenome + ' tem o peso de ', pessoa2.peso, 'kg e altura de ', pessoa2.altura , 'sendo seu IMC de', pessoa2.imc);