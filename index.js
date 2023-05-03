const express = require('express');
const app = express();

// Rota 1: exibe uma página de boas-vindas
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Bem-vindo</title>
      </head>
      <body>
        <h1>Bem-vindo à minha aplicação Node.js!</h1>
        <p>Essa é a primeira porta utilizada, definida como '/'</p>
      </body>
    </html>
  `);
});

// Rota 2: exibe uma página sobre a rota 2
app.get('/rotaDois', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Bem-vindo</title>
      </head>
      <body>
        <h1>Bem vindo a segunda rota da aplicação node</h1>
        <p>Essa é a segunda porta utlizada, definida como 'rotaDois'</p>
      </body>
    </html>
  `);
});

// Rota 3: exibe uma página de contato
app.get('/rotaTres', (req, res) => {
  res.send(`
  <html>
  <head>
    <title>Bem-vindo</title>
  </head>
  <body>
    <h1>Bem vindo a terceira rota da aplicação node</h1>
    <p>Essa é a terceira porta utlizada, definida como 'rotaTres'</p>
  </body>
</html>
  `);
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
