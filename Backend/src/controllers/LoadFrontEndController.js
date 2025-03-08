const LoadFrontEndModel = require('../models/LoadFrontEndModel');

const HomeScreen = (req, res) => {
    const IndexFile = LoadFrontEndModel.HomeScreenModel()

    res.sendFile(IndexFile, (err) => {
        if (err) {
        console.error('Error sending file:', err);
           res.status(500).send('Erro ao carregar a página.');}
    })
  
}

module.exports = {
    HomeScreen
}