
//Step 1
var arr1 = [1,2,3]
console.log(arr1)

var arr2 = [];
for (var i = 0; i < arr1.length; i++){
	arr2.push(arr1[i]*2)
}
console.log(arr2)


//Step 2
//We'll create a function that takes a function in one of its parameter

function mapForEach(arr,fn){
	var newArr = [];
	for(var i = 0; i < arr.length; i++){
		newArr.push(
			fn(arr[i])
		);
	}
	return newArr;
}

//And so that way, we can call this above function in the following way.

var arr3 = [6,7,8];

var arr4 = mapForEach(arr3, function(item){
	return item * 2;
});

console.log(arr4);	
//so in the abbove we created a function that accepts a function in its parameter list to do work.


var checkPastLimit = function(limiter,item){
	return item > limiter
}

var arr5 = mapForEach(arr1,checkPastLimit.bind(this,1));
console.log(arr5);