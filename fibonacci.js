function ehFibo(n) {
    if (n <= 1) {
        return n;
    } else {
        return ehFibo(n - 1) + ehFibo(n - 2);
    }
}

function fibonacci(n) {
    const resultadoFinal = ehFibo(n);

    // Verifica se o número pertence à sequência de Fibonacci
    if (Math.sqrt(5 * n * n + 4) % 1 === 0 || Math.sqrt(5 * n * n - 4) % 1 === 0) {
        return "O número " + n + " pertence à sequência Fibonacci: " + resultadoFinal;
    } else {
        return "O número " + n + " não pertence à sequência Fibonacci";
    }
}

console.log(fibonacci(8));