const listaDeModelos = async () => {   
    try{
      const response = await fetch(`${process.env.API_URL}v1/models`) // realiza a requisição
      
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }

      const data = await response.json(); // Trata os dados para json
      return data; // Retorna os dados para o controller

  
    } catch (err) {
      console.error(`Nao foi possivel completar a requisicao, erro: ${err}`);
      throw err; // Propaga o erro para o controller
    }
}

module.exports ={
    listaDeModelos
}