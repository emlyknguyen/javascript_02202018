
console.log(0.1 + 0.2);
console.log(0.1 + 0.3);

console.log(Number.EPSILON);

// not this way
console.log( (0.1 + 0.2) === 0.3);

// (0.1 + 0.2) === 0.3
console.log( Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON );