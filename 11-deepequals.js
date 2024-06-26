function deepEquals(obj1, obj2) {
    if (typeof obj1 === 'object' && obj1 !== null && typeof obj2 === 'object' && obj2 !== null) {
        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);
        
        if (keys1.length !== keys2.length) {
            return false;
        }

        for (const key of keys1) {
            if (!obj2.hasOwnProperty(key)) {
                return false;}
            if (!deepEquals(obj1[key], obj2[key])) {
                return false;
            }
        }
        return true;
    }
}
