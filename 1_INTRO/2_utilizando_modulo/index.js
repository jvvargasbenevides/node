// Import

const fs = require("fs"); // Importando esse modulo com file system (Geralmente coloca em variável), geralmente coloca o nome do programa igual da variável.

fs.readFile("arquivo.txt", "utf8", (err, data) => {
  // Lê o arquivo e case não haja erro imprime os dados dentro do "data"

  if (err) {
    console.log(err); // Caso nome do arquivo esteja errado, ou não existe apresenta erro
  }

  console.log(data);
});
