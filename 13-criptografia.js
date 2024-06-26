function cript(texto, oqueusuarioquer) {
    return texto.split('').map(oqueusuarioquer).join('');
}

function Cesar(char) {
    const deslocamento = 3;
    const maius = 'A'.charCodeAt(0);
    const minus = 'a'.charCodeAt(0);
    const tam = 26;
    
    if (char >= 'A' && char <= 'Z') {
        return String.fromCharCode((char.charCodeAt(0) - maius + deslocamento) % tam + maius);}
    if (char >= 'a' && char <= 'z') {
        return String.fromCharCode((char.charCodeAt(0) - minus + deslocamento) % tam + minus);}
    return char;
}