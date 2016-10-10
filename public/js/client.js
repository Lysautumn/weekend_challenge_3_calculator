$(function () {
    //variables
    var x = '';
    var y = '';
    var mathObj = { x: 0, y: 0, operator: '' };
    var operator;
    var operClick = false;

    //event listeners for button clicks
    $('.number').on('click', function () {
      if (operClick == false) {
        x = x + $(this).text();
        $('#firstNum').val(x);
      }
    });

    $('.mathOper').on('click', function () {
      operator = $(this).attr('id');
      operClick = true;
    });

    $('.number').on('click', function () {
      if (operClick == true) {
        y = y + $(this).text();
        $('#secondNum').val(y);
      }
    });

    $('#submit').on('click', function (event) {
        event.preventDefault();
        x = $('#firstNum').val();
        y = $('#secondNum').val();

        //put firstNum, secondNum and operator into the empty array mathObj
        mathObj.x = x;
        mathObj.y = y;
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
    });
  });//end of jQuery

//what to do when math operator is returned
function getMath() {
  $.ajax({
    type: 'GET',
    url: '/math',
    success: function (math) {
        $('#answer').empty();
        $('#answer').append(math);
      },
  });
}
