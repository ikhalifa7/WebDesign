
//Display hidden parts
$(document).ready(function(){
    $("#stud_A").click(function(){
        $("#hidden_A").slideToggle(800);
    });
});

$(document).ready(function(){
    $("#stud_B").click(function(){
        $("#hidden_B").slideToggle(800);
    });
});

$(document).ready(function(){
    $("#stud_C").click(function(){
        $("#hidden_C").slideToggle(800);
    });
});

$(document).ready(function(){
    $("#stud_D").click(function(){
        $("#hidden_D").slideToggle(800);
    });
});

$(document).ready(function(){

	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});

	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

});

//Click theme change

$(".changeColor2").on("click", function() {
  var T1ColA = $(this).css("--colorOne");
  var T1ColB = $(this).css("--colorTwo");
  var T1ColC = $(this).css("--colorThree");
  var T1ColD = $(this).css("--colorFour");
  var T1ColE = $(this).css("--colorFive");

  $(".changeColor").removeClass("active");
    $(this).addClass("active");

  $(document.body).css("--colorOne", T1ColA);
  $(document.body).css("--colorTwo", T1ColB);
  $(document.body).css("--colorThree", T1ColC);
  $(document.body).css("--colorFour", T1ColD);
  $(document.body).css("--colorFive", T1ColE);
});
