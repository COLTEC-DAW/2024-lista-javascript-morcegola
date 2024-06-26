function criarMatriz(dimensao, funcaoMatricial) {
    let matriz = [];
    for (let i = 0; i < dimensao; i++) {
        matriz[i] = [];
        for (let j = 0; j < dimensao; j++) {
            matriz[i][j] = funcaoMatricial(i, j);
        }
    }
    return matriz;
}

// Funções matriciais
const somaIndices = (i, j) => i + j;
const produtoIndices = (i, j) => i * j;
const identidade = (i, j) => i === j ? 1 : 0;
const expressaoComplexa = (i, j) => i ** 2 / (j + 1);
const condicional = (i, j) => i > j ? 1 : (i < j ? 5 : 0);