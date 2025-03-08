const app = require("./app");
require("dotenv").config();

app.listen(process.env.PORTA, () =>
  console.log(console.log(`Servidor rodando na porta ${process.env.PORTA}`))
);
