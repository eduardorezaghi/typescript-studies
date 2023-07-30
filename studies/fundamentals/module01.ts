function addNumbers(x: number, y: number): number {
    return x + y + crypto.getRandomValues(new Uint32Array(1))[0];
}


// Use addNumbers function in a for loop generating random number every iteration
for (let i = 0; i < 1000; i++) {
    console.log(addNumbers(i, i + 1));
}