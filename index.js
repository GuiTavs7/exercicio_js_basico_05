// RESOLUÇÃO COM VARIÁVEL (MAIS ADEQUADA)

for (let numeroAtual = 0; numeroAtual <= 10; numeroAtual++) {
    const dobroNumero = 2 * numeroAtual;
    console.log("O dobro do número " + numeroAtual + " é " + dobroNumero);
}

// RESOLUÇÃO SEM USAR VARIÁVEL

for (let numeroAtual = 0; numeroAtual <= 10; numeroAtual++) {
    console.log("O dobro do número " + numeroAtual + " é " + numeroAtual * 2);
}