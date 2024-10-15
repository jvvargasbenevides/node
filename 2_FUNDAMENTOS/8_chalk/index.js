(async () => {
    const { default: chalk } = await import('chalk');

    const nota = 9;
    if (nota >= 6) { 
        console.log(chalk.green.bold('Parabéns! Você está aprovado.'));
    }
})();