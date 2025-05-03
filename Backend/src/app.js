const express = require ('express');
const router = require ('./router');
const cors = require ('cors')
const app = express();
const FRNT_PORT = process.env.FRNT_PORT || 3003;


app.use(cors({
    origin: `http://localhost:${FRNT_PORT}`, // permite requisições do frontend apenas
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))
app.use(express.json())
app.use(router);



module.exports = app

