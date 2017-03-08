//CALLBACK functions

// window.onload = function(){
//   var fruits = ["banana","apple","pear"];
//
//   //the function inside the forEach is a callback function
//   fruits.forEach(function(val){
//     console.log(val);
//   });
//
//   console.log("done");


 //this can be written differently. It doesn't hae to be an inline callback function
 /*

  function callback(val){
    console.log(val);
  }

  fruits.forEach(callback);

  This would have the same effect as above.


};
*/

// the above so far has been syncronous. Look at where the word "done" prints.

//The below is asyncronous.
//asynchonous, something starts now and finish later. The start now part is the part where it
//goes and retrieves the data. The finish later part is the running of the callback function
//on the data just retrieved.
/*
window.onload = function(){
  $.get("data/tweets.json",function(data){
    console.log(data)
  }
}
*/
//this can also be written not inline.
// demonstration of callback hell
// $.ajax({
//   type: "GET",
//   url: "data/tweets.json",
//   success: function(data){
//     console.log(data);
//     $.ajax({
//       type: "GET",
//       url: "data/friends.json",
//       success: function(data){
//         console.log(data);
//         $.ajax({
//           type: "GET",
//           url: "data/videos.json",
//           success: function(data){
//             console.log(data);
//           },
//           error: function(jqXHR,textStatus,error){
//             console.log(error)
//           }
//         })
//       },
//       error: function(jqXHR,textStatus,error){
//         console.log(error)
//       }
//     })
//   },
//   error: function(jqXHR,textStatus,error){
//     console.log(error)
//   }
// })

function handleError(jqXHR,textStatus,error){
  console.log(handleError)
}

$.ajax({
  type: "GET",
  url: "data/tweets.json",
  success: cbTweets,
  error: handleError
})



function cbTweets(data){
    console.log(data);
    $.ajax({
      type: "GET",
      url: "data/friends.json",
      success: cbFriends,
      error: handleError
    })
}

function cbFriends(data){
  console.log(data);
  $.ajax({
    type: "GET",
    url: "data/videos.json",
    success: function(data){
      console.log(data);
    },
    error: handleError
  })
}
