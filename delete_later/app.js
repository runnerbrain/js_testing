var person = new Object();
//There's a shorthand for this type of operator and it's called Object literal
/*var person = {};

person["firstname "] = "Mahmoud";

var propName = "firstname";

console.log(person);
console.log(person[propName]);*/

/*function callWhenDone(val,cb){
	for(var i = 0; i < 500; i++){
	var a= 4 ; var b = 2; if (a < 5) {c = a*b;};
	if(i > 495)
		console.log("I am at index: " +i);
		console.log("c = "+ c);
	console.log(val);
	var val = 1;
	cb(val);
	console.log(val);
}

callWhenDone('3',function(a){
	var a = 'Hello';
	console.log(a);
})

setTimeout(function(){
	console.log("Murooj is the cutest"),1000});


}
console.log("After the timeout function call.....");*/


//-=========================------------===============--------------
function dieToss() {
  return Math.floor(Math.random() * 6) + 1;
}

console.log('1');
var promise = new Promise(function(fulfill, reject) {
  var n = dieToss();
  if (n === 6) {
    fulfill(n);
  } else {
    reject(n);
  }
  console.log('2');
});

var onSuccess = function(toss) {
  console.log('Yay, threw a ' + toss + '.');  
};
var onFailure = function(toss) {
  console.log('Oh, noes, threw a ' + toss + '.');  
};

promise.then(onSuccess, onFailure);

console.log('3');