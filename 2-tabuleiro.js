function xadrez(linhas) {
    let output = '';

    for (let i = 1; i <= linhas; i++) {
        for (let j = 1; j <= 4; j++) {
            if ((i + j) % 2 === 0) {
                output += '# ';
            } else {
                output += '  ';
            }
        }
        output += '\n';
    }

    console.log(output);
}

let linhas = prompt('Digite o número de linhas:');
linhas = parseInt(linhas); 

if (isNaN(linhas) || linhas <= 0) {
    console.log('tem que ser maior que zero, sua anta');
} else {
    imprimirTabuleiroXadrez(linhas); 
}
