function buildFunctions(){
	var arr = [];

	for(var i = 0;i < 3 ; i++){
		arr.push(
			function() {
				console.log(i);
			}

		)
	}
	return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();
//what do we expect the console.log to output.
//My first guess was 2 2 2. Based on the knowledge that I got from the previous lecture.
//but it was 3 3 3.

//How does this work:
//when th buildFunctions is pushed on the Execution stack. a memory location is stored for i and arr
//i goes through 0 , 1, 2 where for each value of i a function object is being pushed on the array.
//then i becomes 3 and the condition becomes false and the loop terminates. 
//The function is popped off the Execution stack
//--------------------------------------------------------
//ok, but what if we want the buildFunctions to output 0, 1, and 2

function buildFunctions2(){
	var arr = [];

	for(var i = 0;i < 3 ; i++){
		arr.push(
			function() {
				console.log(i);
			}

		)
	}
	return arr;
}

var fs = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();