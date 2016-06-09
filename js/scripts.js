var cryptoSquare = function(sentence) {
  var inputArr;
  debugger;
  inputArr = sentence.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()' '0-9]/g,"").toLowerCase();

  var firstArray= inputArr.split("");
  var rows= Math.ceil(Math.sqrt(firstArray.length));
  var columns = rows;

  alert(rows);

  for (var i = 0; i < firstArray.length; i++) {

  }





  return firstArray;
};








$(document).ready(function() {
  $("form#crypto").submit(function(event) {
    event.preventDefault();

    var sentence = $("input#words").val();
    var result = cryptoSquare(sentence);

    $("#result").text(result);

  });
});
