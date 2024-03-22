/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(initialCounter) {
    let previousCounter = initialCounter;
    
    const increment = () => ++previousCounter;
    const decrement = () => --previousCounter;
    const reset = () => previousCounter = initialCounter;

    return {
        increment,
        decrement,
        reset,
    }
};

// or

var createCounter = function(init) {
    let count = init;
    return{
        increment : () => ++count,
        decrement : () => --count,
        reset : () => count = init,
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */