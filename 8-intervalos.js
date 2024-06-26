function range(min, max, i = 1) {
    const result = [];
    
    if (i > 0) {
        for (let current = min + 1; current < max; current += i) {
            result.push(current);}
            
    } else if (i < 0) {
        for (let current = min - 1; current > max; current += i) {
            result.push(current);}
    }
    return result;
}
