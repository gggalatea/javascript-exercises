const fibonacci = function(memberArg) {
    let member;
    if (typeof memberArg !== "number") {
        member = parseInt(memberArg);
    } else {
        member = memberArg;
    }

    if (member < 0) return "OOPS";
    // other method
    // if (member === 0) return 0;

    // let firstPrev = 1;
    // let secondPrev = 0;

    // for (let i = 2; i <= member; i++) {
    //     let current = firstPrev + secondPrev;
    //     secondPrev = firstPrev;
    //     firstPrev = current;
    // }

    // return firstPrev;

    const fibonacciNums = [0, 1];
    for (let i = 2; i <= member; i++) {
        fibonacciNums[i] = fibonacciNums[i - 1] + fibonacciNums[i - 2];
    }
    return fibonacciNums[member];
};

// Do not edit below this line
module.exports = fibonacci;
