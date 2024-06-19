function mod2(number) {
    if (number % 2 === 0) {
        return `${number} é divisível por 2.`;
    } else {
        return `${number} não é divisível por 2.`;
    }
}
function mod(num, mod) {
    if (num % mod === 0) {
        return `${num} é divisível por ${mod}.`;
    } else {
        return `${num} não é divisível por ${mod}.`;
    }
}
