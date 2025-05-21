const MessageModel = require('../models/SendMessageModel');

const SendMessage = async (req, res) => {
    try{
        // const resultado = await ModelsModel.listaDeModelos(); // Substituir pela Função de enviar a mensagem
        res.status(200).json(resultado); // Aqui colocar para retornar apenas a resposta do agente
    }catch(err){
        console.log(`Erro na requisição para enviar a mensagem`);
        res.status(500).json({"mensagem":`Erro: ${err}`});
    }
}

module.exports = {
    SendMessage
}