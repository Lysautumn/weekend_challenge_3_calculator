$(function () {
    var firstNum;
    var secondNum;
    var mathObj = { firstNum: 0, secondNum: 0, operator: '' };
    var operator;
    $('.mathOper').on('click', function () {
      operator = $(this).attr('id');
    });

    $('#submit').on('click', function (event) {
        event.preventDefault();
        firstNum = $('#firstNum').val();
        secondNum = $('#secondNum').val();

        //put firstNum, secondNum and operator into the empty array mathObj
        mathObj.firstNum = firstNum;
        mathObj.secondNum = secondNum;
        mathObj.operator = operator;
        console.log(mathObj);

        //send mathObj to math.js(router)
        $.ajax({
          type: 'POST',
          url: '/math',
          data: mathObj,
          success: getMath,
        });//end of ajax
        $('form').find('input[type=text]').val('');
      });//end of on click function
    $('#clear').on('click', function () {
      $('#answer').empty();
    })
  });//end of jQuery

//what to do when math operator is returned
function getMath() {
  $.ajax({
    type: 'GET',
    url: '/math',
    success: function (math) {
        $('#answer').empty();
        var $div = $('<div></div>');
        $div.append('<p>' + math + '</p>');
        $('#answer').append($div);
      },
  });
}
