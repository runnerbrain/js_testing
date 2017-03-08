//Definition 
//Defintion 
//Inheritance: One object gets access to the pproperties and methods of another object.
//Inheritance can be very verbose. 
//Prototypal inheritance is a little easier to use.


//Consider Object obj with property prop1. We also know that js adds hidden methods and properties.
//all objects in JS have access to an object property called proto. 
//If this object has a property. It can be called from the initial object.

//obj has a property prop1
//obj has a prototype with property prop2. Prop2 is accessible from with obj.pop2, because of the concept of the prototype chain.
//Portotype has also a prototype called prototype which can have a property prop3 and now obj.prop3 is also accessible.
//if we have anothe object called ojb2. now Obj2 is also accesible and points to the same object as obj.prop2.

var person = {
	firstname: 'default',
	lastname: 'default',
	getFullName: function(){
		return this.firstname+ ' ' + this.lastname;
	}
}

var john = {
	firstname: 'john',
	lastname: 'Doe'
}


//don't do the following ever. It's only for demo purposes.

john.__proto__ = person;

console.log(john.getFullName()); //will return John Doe,
console.log(john.firstname); //will return John

//what if we have
var jane = {
	firstname : 'jane'
}

jane.__proto__ = person;

console.log(jane.getFullName()); //will return jane default.
//reason is jane object inovkes getFullName doesn't find it there, searches its prototype which is person and it finds it.
//the getFullName needs firstname and it finds it on the jane object, but can't find lastname and therefore grabs it from the prototype person.

//lec56

for(var prop1 in jane)
	if(jane.hasOwnProperty(prop1)){
		console.log(prop1 + '-> '+jane[prop1]);
	}

var jane = {
	address: '123 fake street',
	getFormalFullName: function(){
		return this.lastname + ', ' + this.firstname;
	}
}

var jim = {
	getFirstName: function(){
		return firstname;
	}
}

_.extend(john, jane, jim);

