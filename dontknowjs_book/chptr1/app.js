// function identify(){
//   return this.name.toUpperCase();
// }
//
// function speak(){
//   var greeting = "Hello I am "+ identify.call(this);
//   console.log(greeting);
// }
//
// var me = {
//   name: "Mahmoud"
// }
//
// var you = {
//   name: "Samra"
//

function foo(){
  console.log('a: '+this.a);
}

function doFoo(fn){
  fn();
}


var obj = {
  a: 2,
  foo: foo
}

//var bar = obj.foo;

var a = 'jeh';

setTimeout(obj.foo,2000);
