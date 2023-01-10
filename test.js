function solve() {
    size = 4;
    let symbols = [];
    let temp = [];

    for (let k = 0; k < size * size; k++) {
        temp.push(k);
    }
    let shuffled = temp.sort((a, b) => 0.5 - Math.random());
    for (let l = 1; l <= size * size / 2; l++) {
        let n = Number(shuffled.shift());
        let m = Number(shuffled.shift());
        symbols[n] = l;
        symbols[m] = l;
    }

console.log(symbols);





    symbols.length = size * size - 1;
    for (let x = 0; x <= symbols.length; x++) {
        let num1 = Math.floor(Math.random() * 8) + 1;

        if (!symbols.includes(num1)) {
            if (!symbols[num1]) {
                symbols[num1] = num1;
            } else {
                let f = Math.floor(Math.random() * 8) + 1;
                while (!symbols[f]) {
                    if (!symbols[f]) {
                        symbols[f] = num1;
                        break;
                    }
                    f = Math.floor(Math.random() * 8) + 1;
                }
            }
            let num2 = Math.floor(Math.random() * 8) + 1;
            while (!symbols[num2]) {
                symbols[num2] = num2;
            }
        }


    }
    console.log(symbols);
}
solve()