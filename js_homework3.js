
function pow(x, y) {
    let result = x;
    
    for (let i = 1; i < y; i++) {
        result *= x;
    }

    return result;
}
console.log(pow(8, 2));