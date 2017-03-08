function Person(){
    this.firstname = 'John';
    this.lastname= 'Doe';
    console.log("This function is invoked.")
    
}

var john = new Person(); //new is an operator - when we use new an empty object is created. then it invokes the function
//when the function is called, the execution context creats the this keyword for us which points to a new empty object.
//and that object is returned automatically from the function. 

console.log(john);

//if we put a return statement in the 

//Lecture 58

//How do we set up a constructor..The good news is that the new operator sets up the prototype. Every function has a prototype property.
//and the prototype property is where the prototye of the function is stored.

Person.prototype.getFullName = function(){
    return this.firstname + ', '+ this.lastname;

}

//The benefit of     having the prototype property is to put the common methods of objects on the prototype and that
//way you'll only have one copy of the method and avoid having multiple copies in case you have declared multiple objects and each 
//having a similar method.