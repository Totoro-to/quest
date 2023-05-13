let answer = ['яблоко', 'груша', 'город', 'школа', 'сайт', 'браузер', 'плагин', 'цвет', 'стиль','язык', 'узор', 'сорока']

let was = []
let progress = 0

let num = Math.floor(1 + Math.random()* 12)


$(document).ready(function(){

  $('.progress').knob({
      'min': 0, 
      'max': 5,
      'angleOffset': -60,
      'angleArc': 120,
      'readOnly': true,
      'width' : '100%',
      'thickness': 0.2,
      'lineCap': 'round',
      'displayInput' : false,
      'bgColor' : '#cde8ea',
      'fgColor' : '#991525'
  })

 

  $('.block2').slideUp()
  $('.block1').click(function(){
    $('.block2').slideToggle()
  })

startRebus(num)

  $('#buttom').click(function(){

    if($('#answer').val().toLowerCase() ==`${answer[num - 1]}`){
      $('#answer').val("");
      progress++
      $('.progress').val(progress).trigger('change')
      was.push(num)

      if(progress < 5){
        do{
          num = Math.floor(1 + Math.random() * 12)
        } while(was.includes(num))
   startRebus(num)    
      }
      else{
            $('#buttom').css({
      'backgroundColor': 'rgba(165, 42, 15, 0.5)'
    })
        $('.reb').hide();
        $('#answerInput').hide()
        $('#nextTask').show()
        }
      }

  })
});
function startRebus(arg){
  $('.img').attr('src', `rebuses/${arg}.jpg`)
}

