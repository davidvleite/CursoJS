const express = require('express');
const app = express();
// req - requisição res - resposta
app.get('/', (req, res) => {                          
    res.send('Hello world!');
});

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente.');
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor exec port 3000');
});


// para ativar o servidor digita no terminal node server.js, nesse caso tem que para com ctrl c
// para ele ficar assistindo digita npm run start e para parar o servidor ctrl c

// 
// ROTAS
// http://meusite.com/ <- GET -> Entrega a página
// http://meusite.com/sobre <- GET -> Entrega a página /sobre
// http://meusite.com/contato <- GET -> Entrega a página /contato

// CRUD -> create, read, update, delete
//     post(criar), get(ler), put(atualizar), delete(apagar)

//ctrl alt p para parar o servidor e pelo node 