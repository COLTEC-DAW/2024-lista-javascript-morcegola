function transformstring(texto, tipo) {
    const transformacoes = {
        vogmaius: char => 'aeiouAEIOU'.includes(char) ? char.toUpperCase() : char,
        constmaius: char => 'aeiouAEIOU'.includes(char) ? char : char.toUpperCase(),
        vogminus: char => 'aeiouAEIOU'.includes(char) ? char.toLowerCase() : char,
        constminus: char => 'aeiouAEIOU'.includes(char) ? char : char.toLowerCase(),
    };
    
    const transformacao = transformacoes[tipo] || (char => char); 
    
    return texto.split('').map(transformacao).join('');
}