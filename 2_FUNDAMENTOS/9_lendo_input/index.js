const readline = require("readline").createInterface({ // Adiciona o Core Module readline e cria a interface
    input: process.stdin, // Lê a entrada
    output: process.stdout // Exibi a saída
})

readline.question("Qual a sua linguagem preferida?", (language) => { // Pergunta exibida no console

    console.log(`A minha linguagem preferida é: ${language}`) // Resposta exibida no console baseado no no que foi respondido;
    readline.close(); // Fecha o readline
})