const express = require ('express');
const router = require ('./router');
const cors = require ('cors')
const path = require('path')
const app = express();


app.use(cors({
    origin: '*', // Permite qualquer origem
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))
app.use(express.json())
app.use(express.static(path.join(__dirname, '../../Frontend')));
app.use(router);



module.exports = app

