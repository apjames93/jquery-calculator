$(document).ready(function() {
    var divide = $(".operator")[1].innerHTML = "/";
    var multiply = $(".operator")[2].innerHTML = "*";
    $("span").click(function() {
        var number = $("#screen").text()
        if ($(this).text() === "=") {
            var total = eval(number);
            $("#screen").empty();
            return $("#screen").append(total)
        } else {
            $("#screen").append($(this).text())
        }
    })
    $("#cancel").click(function() {
        $("#screen").empty();
    })
})
