function piramide(linhas) {
    for (let i = 1; i <= linhas; i++) {
        let str = '';
        
        for (let j = 1; j <= i; j++) {
            str += '#';}
        console.log(str);}
}
piramide(5);