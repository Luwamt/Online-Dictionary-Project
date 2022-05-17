/**
 * dict.js
 */
"use strict";
$(document).ready(function () {
  $("#lookup").click(function () {
    var word = $("#word").val();
    $.ajax({
      url: "http://localhost:8081",
      data: { word: word },
      type: "GET",
      success: updateValue,
      error: errorHandler,
    });
  });
});
$(document).ready(() => {
  $("#word").keyup(function (event) {
    if (event.keyup === 13) {
      $("#lookup").click();
    }
  });
});
function updateValue(data) {
  $("#show").empty();
  $("#word").html($("#term").val().trim());
  if ($("#term").val().trim() == "") {
    $("#show").append("<th>Sorry,Please input the term. </th>");
  } else if (data.length == 0) {
    $("#show").append(
      "<th>Sorry,The word ( " +
        $("#term").val() +
        " ) was not found in. Please change another word. </th>"
    );
  } else {
    var showThis = "";
    for (var i = 0; i < data.length; i++) {
      var type = data[i].wordtype;
      var def = data[i].definition;
      showThis +=
        "<div class= 'row'>" +
        (i + 1) +
        "(" +
        type +
        ")" +
        " :: " +
        def +
        " </div> <hr>";
    }
    $("#show").html(showThis);
  }
}

function errorHandler() {
  console.log("Error ocured from the server");
}

//     var show='';
//     for(var i=0;i<data.length;i++){
//         var type= data[i].wordtype;
//         var def= data[i].definition;
//         show+= "<div class='row'>"+(i+1)+"("+type+")"+" ::"+def+'</div> <hr>'
//     }
//     $("#show").html(show);
// }
