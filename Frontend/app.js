const express = require('express');
const path = require('path');
const cors = require('cors');
const SRV_PORT = process.env.SRV_PORT || 3001;

// Criar a instância da aplicação Express
const app = express();

// Configuração CORS para permitir comunicação com o backend
app.use(cors({
  origin: `http://localhost:${SRV_PORT}`, // URL do seu servidor backend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal que serve o arquivo HTML principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


module.exports = {app};