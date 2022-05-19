/**
 * dict.js
 */
"use strict";
$(document).ready(function () {
  $("#lookup").click(lookupWord);
  $(document).keydown(function (event) {
    if(event.keyCode == 13){
      lookupWord();
    }   
  });
});
//a function that will fire a connection to DB and get tha data, when the lookup button clicked
function lookupWord() {
  $.ajax({
    url: "http://localhost:8088/FindWord",
    type: "get",
    data: { term: $("#term").val() },
    dataType: "json",
    success: showResult,
    error: failedToShow,
  });
}
//if the connection word will call this 
function showResult(data) {

  $("#show").empty(); 
  $("#word").html($("#term").val().trim());
  
  if($("#term").val().trim()==""){
    $("#show").append(
    "<th>Please enter a valid input Thanks.</th>"
    );
  }else if(data.length == 0){
    $("#show").append(
      "<th>Sorry,The word ( "+$("#term").val()+" ) was not found, try different input Please. </th>"
    );
  }else{
    
    for (var i in data) {
      $("#show").append(
        "<tr><td>" +
          (parseInt(i) + 1) + " (" + data[i].wordtype + ")" + " :: " + data[i].definition +
          "</td></tr>"
      );
    }
  }
}
//if the connection is failed it will display this
function failedToShow(error) {
  console.log(`Error ocured on the connection ${error.responseText}`);
}
