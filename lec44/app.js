//function statement
//function exrpesion === function epression

var greetFunc = function(name){
    console.log('Hello' + name);
}

greetFunc('Mahmoud');

//A special thing about functions is that they are objects with code properties.
//Here I am immediately invoking the function;
var greeting = function(name){
    console.log('Hello' + name);
}(' Fathi');

//the following are valid javascript statements;
3;
"This is a string";
var me = {
    name: 'Mahmoud',lastname: 'Badreddine'
};

//what about a regular object
({
    name: 'func1',
    number : 1
});

//this won't work without the brackets.

//what about functions
/*function (name){
    return 'Hello '+ name;
}*/

//if we run it it won't work as an anonymous function. The solution is to wrap it with parentheses. then it's just a valid expression.
(function(name){
    console.log('Hi '+name);
});

//then we could just add () and it becomes immediately invoking

(function(name){
    console.log('Hi '+name);
})('Mahmoud');
