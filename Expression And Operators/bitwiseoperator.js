function bitwiseOperation(a, b) {
    const bitand = a & b;
    const bitor = a | b;
    const bitxor = a ^ b;
    const leftshift = a << b;
    const rightshift = a >> b;
    const bitnot = ~a
    return [bitand, bitor, bitxor, leftshift, rightshift, bitnot];
    
}

console.log(bitwiseOperation(10, 5));
console.log(bitwiseOperation(15, 9));