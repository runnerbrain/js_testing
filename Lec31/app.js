/*var person = new Object();
//There's a shorthand for this type of operator and it's called Object literal
var person = {};

person["firstname "] = "Mahmoud";

var propName = "firstname";

console.log(person);
console.log(person[propName]);*/

$(function(){

var timer = (function(){

	var name = 'Samra';
	console.log("hello "+ name);

	$button = $("button");

	$button.on('click',resolveButtons);

	function resolveButtons(e){
		var y = 1 < 2  ? "Ayyyy" : "OoooH";
		console.log(y)
		console.log(e.target.id)
	}

	return {
		setName: function(){
			console.log("I return to you: "+ name);
		}
	}
})();

timer.setName();

});