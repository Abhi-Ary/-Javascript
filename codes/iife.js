// Immediately invoked function expression
(function chai(){
    // name iife
    console.log(`Database connected`);
})();

(  (name) => {
    // unnammed iife
    console.log(`DB connected two ${name}`);
    
})('Abhishek')