var result2 = 2;
var result1 = 1;
var result3 = 3;
var result4 = 4;
var result5 = 5;

function score () {
  return "you have scored" + total;
}

$(document).ready(function() {
  $("#button2").click(function() {
    var question1 = $("input[name='question1']:checked").val();
    var question2 = $("input[name='question2']:checked").val();
    var question3 = $("input[name='question3']:checked").val();
    var question4 = $("input[name='question4']:checked").val();
    var question5 = $("input[name='question5']:checked").val();
    console.log(question1);
    console.log(question2);
    console.log(question3);
    console.log(question4);
    console.log(question5);




})
})