// Immediately Invoked Function Expressions (IIFE)

(function chai() {

    // Named iife
    console.log(`DB CONNECTED`);
})();


( (name) => {
    // without named iife
    console.log(`DB CONNECTED TWO ${name}`);
} )('Rajab')