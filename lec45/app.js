
var greeting = 'Hola';
//IIFE

(function(name){
    var greeting = 'Hello';
    console.log(greeting+' '+name);
})('Booboo');

//this will print the value hola. So there is no collision between the value of the greeting "hola" and "Hello" because the "hello" is defined inside
//the IIFE
console.log(greeting+' dumbass');

//this is the desired behavior to ensure that we're not colliding with anything in the global object. But what if we want to put something into the global object.
//then we pass into the functino


(function(global, name){
    var greeting = 'Hello';
    //this will affect the global variable from inside the function.
    global.greeting = 'marhaba';
    console.log(greeting+' '+name);
})(window,'Booboo');

console.log(greeting+' dumbass');