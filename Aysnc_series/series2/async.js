window.onload = function(){
  //supported by most modern browsers
  var http = new XMLHttpRequest();
  http.onreadystatechange = function(){

    if(http.readyState === 4 && http.status === 200)
      console.log(JSON.parse(http.response));
  }
  //set up the GET request
  http.open("GET", "data/tweets.json",true);
  //Now that the request has been prepared now carry it out.
  http.send();
  //console.log("test message")


  //jquery-3

  $.get("data/tweets.json",function(data){
    consol.log(data)
  })
  console.log("test message");
  
}


/*
 Ready states

  0 - request not initialized
  1 - request has been set up
  2- request has been sent
  3- request is in process
  4- request is complete.
*/
