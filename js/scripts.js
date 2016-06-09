var cryptoSquare = function(sentence) {
  var inputArr;
  inputArr = sentence.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()' '0-9]/g,"");





  return inputArr;
};








$(document).ready(function() {
  $("form#crypto").submit(function(event) {
    event.preventDefault();

    var sentence = $("input#words").val();
    var result = cryptoSquare(sentence);

    $("#result").text(result);

  });
});
