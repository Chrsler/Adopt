$('.form__btn').click(function() {
  $('.mail__letter').toggleClass('move');
  $('.mail__top').toggleClass('closed');
  $('.form__btn--invisible').toggleClass('visible');
  $('.form__btn--visible').toggleClass('invisible');
});

$('input').focus(function() {
  $(this).parent().addClass('active');
  $('input').focusout(function() {
    if($(this).val() == '') { $(this).parent().removeClass('active');
    } else { $(this).parent().addClass('active');
    }
  })
});
        




function clearText()  
{
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('message').value = "";
    document.getElementById('checkbox').value = "";
    
}  
    
