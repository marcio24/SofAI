const app = require("./app");
require("dotenv").config();

app.listen(process.env.PORT, () =>
  console.log(console.log(`Servidor Backend rodando na porta ${process.env.PORT}`))
);
