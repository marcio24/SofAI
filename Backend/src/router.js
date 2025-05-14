const express = require("express");
const multer = require("multer");
const ModeslController = require("./controllers/ModelsController")


const router = express.Router();

router.get('/models', ModeslController.ListaModelos)
router.get("/SendMessage", ConnectionController.ConectaAPI);
//router.post("/send", MessageCampainController.EnviaMensagem);


module.exports = router;
