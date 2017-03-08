function sayHiLater(){
	var greeting = 'Hi!';

	setTimeout(function(){
		console.log(greeting);
	},3000);
}

sayHiLater();

//in this simple example above we used closures.
//In other words though the function sayHiLater has finished running (not quite sure about that),
//and the listening function inside setTimeout is invoked, it has access to the variables in its 
//outer environment, which is what a closure is.

//Definition : callback function, is a function you give to another function to execute when the other function is finished.
//building callback functions.

function tellMeWhenDone(callback){
	var a = 1000;
	var b = 2000;

	callback();
}

tellMeWhenDone(function(){
	console.log('I am done');
})

tellMeWhenDone(function(){
	console.log('I said I am done!!!');
})