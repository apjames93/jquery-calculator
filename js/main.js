$(document).ready(function() {
    var array = [];
    var divide= $(".operator")[1].innerHTML = "/";
    var multiply =$(".operator")[2].innerHTML = "*";
    $("span").click(function() {
      var number = $("#screen").text()
        if ($(this).text() === "=") {
          var total = eval(number);
          $("#screen").empty();
            return $("#screen").append(total)
        }if($(this).text() === "÷"){
          divide
        }if($(this).text() === "x"){
          multiply
      }else{
          $("#screen").append($(this).text()).not($("#cancel"));}
    })
    $("#cancel").click(function(){
        $("#screen").empty();
      })
})
