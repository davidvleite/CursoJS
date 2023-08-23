const express = require('express');
const app = express();
// req - requisição res - resposta

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {                          
    res.send(`
    <form action="/" method="POST">
    Nomde do cliente: <input type="text" name="nome">
    <button> Olá mundo</button>
    </form>
    `);
});

app.get('/testes/:idUsuarios?', (req, res) => {                          
    console.log(req.params);
    console.log(req.query);
    res.send(req.params);
});

// localhost:3000/testes/?nome=David&sobrenome=Leite&idade=36
app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`O que vc me envio foi: ${req.body.nome}`);
});


app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor exec na port 3000');
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