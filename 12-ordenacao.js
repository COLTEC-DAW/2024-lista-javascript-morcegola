function bubbleSort(vetor, comparar) {
    let n = vetor.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (comparar(vetor[j], vetor[j + 1]) > 0) {
                [vetor[j], vetor[j + 1]] = [vetor[j + 1], vetor[j]];}
        }
    }
    return vetor;}
    
const crescente = (a, b) => a - b;
const decrescente = (a, b) => b - a;
const imparesCrescente = (a, b) => (a % 2 !== 0 && b % 2 === 0) ? -1 : (a % 2 === 0 && b % 2 !== 0) ? 1 : a - b;
const paresDecrescente = (a, b) => (a % 2 === 0 && b % 2 !== 0) ? -1 : (a % 2 !== 0 && b % 2 === 0) ? 1 : b - a;