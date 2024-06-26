function verifiqnum(num, oqueusuarioquer2) {
    return oqueusuarioquer2(num);
}

function impar(num) {
    return num % 2 !== 0;
}

const primo = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;}
    }
    return num > 1;
};
