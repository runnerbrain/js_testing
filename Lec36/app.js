var a = 3;
var b;

b = a;
a = 2;

console.log(a);
console.log(b);
//outputs 2 and then 3. Because these were copied by value.
var c = {greeting: "hi"};
var d;

d = c;
c.greeting = 'Hello';

console.log(c)
console.log(d)

//outputs "hello" twice because the objects copy by reference.

function changeGreeting(obj){
	obj.greeting = 'hola';
}

changeGreeting(d);

console.log(c)
console.log(d)

//equals operator set up a new memory space (new address)

d = {greeting: 'howdy'};  //this is a brand new object this is why it gets set to the new value. 
console.log(c)
console.log(d)