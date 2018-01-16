var i = 1;
$(".bt1").on('click', function(){
    $(".leftblock").append('<div class="slide" id="slide'+ i++ +'">'
                           +'<input type="text" class="inp1" placeholder="Text head" readonly></input>'
                           +'<div class="textborder"></div>'
                           +'<textarea cols="10" rows="4" class="area" placeholder="Text body" readonly></textarea>'
                           +'</div>');
	

	

});

$('.leftblock').on('click', '.slide', function(){
	$('.content').html('<div class="slide" id="'+ $(this).attr("id") + '">' + $(this).html() + "</div>")
    $('.content .slide .inp1').val($('.leftblock #' + $('.content .slide').attr("id") + ' .inp1').val())
    $('.content .slide .area').val($('.leftblock #' + $('.content .slide').attr("id") + ' .area').val())
    $('.content').append("<button type='submit' class='bt4'>SAVE</button>");

	$('.content .slide .inp1').removeAttr("readonly");
    $('.content .slide .area').removeAttr("readonly");

	$('.content .slide .area').css({ "margin-left": "2%",
    "margin-top": "7%",
    "overflow": "hidden",
    "border": "none",
    "outline": "none",
    "font-size": "15px",
    "font-family": "fantasy",
    "width" : "97%",
    "height" : "61%",
    "resize" : "none"
})
	$('.content').on('click', '.bt4', function(){
    $('.leftblock #' + $('.content .slide').attr("id") + ' .inp1').val($('.content .slide .inp1').val())
    $('.leftblock #' + $('.content .slide').attr("id") + ' .area').val($('.content .slide .area').val())
})
})





  
    
