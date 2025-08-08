/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    const oInit = init;
    const increment = () => { init++; return init }
    const reset = () => { init = oInit; return init }
    const decrement = () => { init--; return init }
    return { increment, reset, decrement }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */