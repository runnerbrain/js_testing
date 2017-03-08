var person = {
	lastName : 'Mahmoud',
	firsrtName: 'Badredine',
	getFullName: function(){
		var fullname = this.firsrtName+ ' '+ this.lastName;
		return fullname;
	}
}

var logName = function(lang1, lang2){
	console.log('Logged: '+ this.getFullName());
	console.log('Arguments: '+ lang1+ ' '+lang2);
	console.log('-------------------');
}

//the above function will fail because 'this' inside this function
//refers to the global Window object and getFullName is not a method of the window object
//so it will fail with the error "this.getFullName is not a function".
//UNlike bind which creates a copy of the function, call simply executes it.

//however if we do the following
var logPersonName = logName.bind(person) //logName is an object and has access to the bind method
                                         //And anything we pass in the parameter of bind becomes 
                                         //the thing that the "this" inside logName which is the function 
                                         //object on which we called bind, points to.

logPersonName('en');      //and now this will work.                        

//--------------------.call 
//Definition: lets us control what the this parameter is 
logName.call(person,'en','es');

//.apply: does the same thing as call, but accepts an array of parameters in the second parameter
logName.apply(person,['en','es']);

//to prove a point further we can use any of those three methos on an IIFE withouth invoking it 
//i.e ( function(){---code---}).call(obj,'param1','param2')

(function(lang1, lang2){
	console.log('Logged: '+ this.getFullName());
	console.log('Arguments: '+ lang1+ ' '+lang2);
	console.log('-------------------');
}).call(person,'ar','fr') 


//wher do we use this in real life
//example: function borrowing: This means we borrow the methods of other objects and use them with a different object
//so person2 is my secondary object
var person2 = {
	firsrtName: 'Jane',
	lastName: 'Doe'
}
console.log(person.getFullName.call(person2));

//Antoher example is function currying: 

function multiply(a,b){
	return a*b;
}

var multiplyByTwo = multiply.bind(this,2); //first parameter will always be a what the value of the second parameter in the first parameter of the multiply function.
console.log(multiplyByTwo(4)); // so this willl return 8 because 2 is passed to a.
//Definition: function currying is createing a copy of a function but withi some preset parameters

