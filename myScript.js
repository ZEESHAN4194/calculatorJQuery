$(document).ready(function(){
var arr = [];
var num = '';
  $('p').click(function(){
    var text = $(this).text()
    num += text;

    console.log(num);
    // $('#screen').val(text);
    $("#screen").val(function() {
        return this.value + text;
    });

  });
});