
function greet(saywhat){
    console.log('inside greet');
	return function(name){
		console.log(saywhat+' '+name);
	}
}

//Calling the function greet like this only returns the message "inside greet"
greet('Hi');

//Inside the greet function we're returning a function object which will sit there doing nothing until we invoke it
//in the following manner:
greet('Hi')('Mahmoud');


//we can do this differently still by declaring a function expression

var sayHi = greet('HI');
sayHi('Mahmoud');
//the above should make us pause for a second. As how is it possible that the function greet retained the value of "HI" when sayHi was invoked 
//later with the value of "Mahmoud". The issue here is that function greet which was passed the value 'Hi' was popped off the execution stack, 
//so how does the invoking of sayHi with 'Mahmoud' still knew about it.
//The answer is that despite the EC is one but the value such as 'HI' is still hanging around in memory.
//so when the code of the internal function runs it has access to its outer environment and goes down the memory chain and closes in 
//on all the variables that it's supposed to have access to. This is closure. It's a feature of the JS language.