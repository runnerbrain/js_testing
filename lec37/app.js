// if we console.log this in the global environment it points to the window environment.
//we then log this from within the function and it still pointed to the window environment.

function a(){
	console.log(this)	
}

var b = function(){
	console.log(this);
}

a();
b(); //and here 'this' is still pointing to the out. So whenever we create a function this points to the global window object.


//what about methods. Note: if the value is a primitive it's called a property and if it's a function it's called a method.
var c = {
	name: 'The c object',
	log: function() {
		var self = this;
		this.name = 'Udated C object';
		console.log(self);

		var setname = function(newname){
			self.name = newname;
		}
		setname('Updated one more time! The C object');
		console.log(self);
	}
}

c.log();

//so in closing the this keyword is the global variable when invoked from inside a function
//but when used from inside the method of an object, the this keyword points to the object itself.
//however any internal functions inside the method present us with what most people believe to be a bug in the JS programming language
//so the workaround is to create an object called self and set it equal to this which is pointing to the object and then use self instead of this.