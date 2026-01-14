//Immediatly invoke function expression

//named iife
(function chai() {
    console.log(`Hello You Are Now Connected`);
    
})();



( (name) => {
    console.log(`Hello ${name} You Are Again Connected Now`);
    
})("prajwal")

