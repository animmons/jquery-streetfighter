$(document).ready(function() {
	 $('.ryu').mouseenter(function() {
    	$('.ryu-still').hide();
		$('.ryu-ready').show();
	 })
  	.mouseleave(function() {
    	$('.ryu-ready').hide();
		$('.ryu-still').show();
	})

  	.mousedown(function() {
  		playHadouken();    
  			$('.ryu-ready').hide();
  			$('.ryu-throwing').show();
  			$('.hadouken').finish().show()
  		.animate(
    		{'left': '300px'},
    		500,
    		function() {
      		$(this).hide();
      		$(this).css('left', '-212px');
    }
  );
})
  	.mouseup(function() {
  		$('.ryu-throwing').hide();
  		$('.ryu-ready').show();
	});



document.onkeydown = function(e){
    e = e || window.event;
    var key = e.which || e.keyCode;
    if(key===88){
        $('.ryu-still').hide();
        $('.ryu-ready').hide();
        $('.ryu-cool').show();
    } 
}


document.onkeyup = function(e){
    e = e || window.event;
    var key = e.which || e.keyCode;
    if(key===88){
        $('.ryu-still').show();
        $('.ryu-ready').show();
        $('.ryu-cool').hide();
    } 
}


//http://stackoverflow.com/questions/14261062/js-function-when-keyboard-key-is-pressed

})




function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}





