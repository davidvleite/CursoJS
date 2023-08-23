/*function saudacao(nome){
console.log(`Bom dia ${nome}`);
return 123456;
}

const variavel = saudacao('David');
console.log(variavel);*/

/*function saudacao(nome) {
    return `Bom dia ${nome}`;
}

const variavel = saudacao('David');
console.log(variavel);*/

function soma(x= 1,y= 1){ // Se o usuario n mandar nenhum valor o padrão será 1.
    const resultado = x + y;
   // console.log("Olá Mundo!"); // + de 1 ação
    return resultado;
}
console.log(soma(1,));

console.log(soma(1,2));

const resultado = soma(2,2); // Este resultado não é o mesmo da linha 17.
console.log(resultado);

//FUNCAO DENTRO DE UMA VARIAVEL

const raiz = function(n){
    return n ** 0.5;
};

console.log(raiz(9));

//AROW FUNCTION

const raiz1 = n =>  n ** 0.5;

console.log(raiz1(9));

