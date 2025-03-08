const express = require("express");
const multer = require("multer");
const LoadFrontController = require("./controllers/LoadFrontEndController");


const router = express.Router();

router.get('/home', LoadFrontController.HomeScreen)
//router.get("/connection", ConnectionController.ConectaAPI);
//router.post("/send", MessageCampainController.EnviaMensagem);


module.exports = router;
