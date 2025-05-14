const ModelsModel = require('../models/ModelsModel');

const ListaModelos = async (req, res) => {
    try{
        const resultado = await ModelsModel.listaDeModelos();
        res.status(200).json(resultado);
    }catch(err){
        console.log(`Erro ao realizar requisição para obter os modelos`);
        res.status(500).json({"mensagem":`Erro: ${err}`});
    }
}

module.exports = {
ListaModelos
}