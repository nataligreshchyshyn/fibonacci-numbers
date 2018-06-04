let n;
do {
    alert('Please enter a natural number');
    n = prompt('Enter n');
} while (n <= 0); 

function fib(n) {
    if (n === 1 || n === 2) {
        return 1;
    }
    else {
        return n = fib(n - 1) + fib(n - 2);
    }
}
alert(fib(n));

let a = 1;
let b = 1;

function fib1(n) {
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}
alert(fib1(n));
