function countdown(i) {
    console.log(i)
    if (i === 0) return
    countdown(i - 1)
}

// countdown(3)

// 3.1 greet2 was called during the greet function exection. Once greet2 completes, the stack will return to the greet function.

function fact(x) {
    if (x === 1) return 1
    return x * fact(x - 1)
}

console.log(fact(3))

// 3.2 Call stack exceeded error will occur if I run a recursive function that never ends