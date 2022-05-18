/**
 * dict.js
 */
"use strict";
$(document).ready(function () {
  $("#onLookup").click(lookupWord);
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
    success: showSearchedResult,
    error: failedToShow,
  });
}
//if the connection word will call this 
function showSearchedResult(data) {

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
// $(document).ready(function () {
//   $("#lookup").click(function () {
//     var word = $("#word").val();
//     $.ajax({
//       url: "http://localhost:8084/",
//       data: { word: word },
//       type: "GET",
//       success: updateValue,
//       error: errorHandler,
//     });
//   });
// });
// $(document).ready(() => {
//   $("#word").keyup(function (event) {
//     if (event.keyup === 13) {
//       $("#lookup").click();
//     }
//   });
// });
// function updateValue(data) {
//   $("#show").empty();
//   $("#word").html($("#term").val().trim());
//   if ($("#term").val().trim() == "") {
//     $("#show").append("<th>Sorry,Please input the term. </th>");
//   } else if (data.length == 0) {
//     $("#show").append(
//       "<th>Sorry,The word ( " +
//         $("#term").val() +
//         " ) was not found in. Please change another word. </th>"
//     );
//   } else {
//     var showThis = "";
//     for (var i = 0; i < data.length; i++) {
//       var type = data[i].wordtype;
//       var def = data[i].definition;
//       showThis +=
//         "<div class= 'row'>" +
//         (i + 1) +
//         "(" +
//         type +
//         ")" +
//         " :: " +
//         def +
//         " </div> <hr>";
//     }
//     $("#show").html(showThis);
//   }
// }

// function errorHandler() {
//   console.log("Error ocured from the server");
// }

// //     var show='';
// //     for(var i=0;i<data.length;i++){
// //         var type= data[i].wordtype;
// //         var def= data[i].definition;
// //         show+= "<div class='row'>"+(i+1)+"("+type+")"+" ::"+def+'</div> <hr>'
// //     }
// //     $("#show").html(show);
// // }
