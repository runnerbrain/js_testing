function makeAdder(x){
	return function(y){
		console.log(x + y);
	};
};

var add5 = makeAdder(5);
var add10 = makeAdder(10);

add5(7); //12
add10(7); //17