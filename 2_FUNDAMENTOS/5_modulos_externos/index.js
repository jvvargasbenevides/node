const minimist = require('minimist');

const args = minimist(process.argv.slice(2)) // Permite ler argumentos pela linha de comando "MINIMIST"
 
console.log(args)

const nome = args['nome'];
 
const profissao = args['profissao'];

console.log(nome, profissao);