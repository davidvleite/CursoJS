require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {        
        app.emit('pronto');
    })
    .catch(e => console.log(e));


const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware');
// req - requisição res - resposta

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));

app.set('view engine', 'ejs');

// Nossos middlewares
app.use(middlewareGlobal);
app.use(routes);
app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor exec na port 3000');
    });
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