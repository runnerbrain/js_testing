//The following is a function statemen6t that gets put in memory but it doesn't return a value.

//
greet();

function greet() {
	console.log('hi statement');
}

//function expression
//This is a function expression that returns a value.
var anonymousGreet = function (){
	console.log("hi expression");
}

anonymousGreet(); 


//to invoke a fucntion expression we just write the name and follow it with ()


//the difference between the two is when the expression is created, it results 
// in an object being created in memory.
//The question is what if we move the call to the anonymous fucntion above the function expression
//then what would happen.
//WE get an error. That's becuase again the function expression invocation has not been defined yet.

function log(a){
	console.log("inside a");
	a();
}

log(function(){
	console.log('heyhey');
});

//This idea of passing function around introduces a new class of programming called functional programming.