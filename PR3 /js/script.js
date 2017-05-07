$(document).ready(function() {

n=1;

$('body').click(function(){
	$(this).removeClass();
	$(this).addClass('swap-'+n+'');
	
	if(n > 8){
		n=0;
	}

	n++;

});

$('body').mousemove(function(e){
		// try switching the 'top' and 'left' values
		$('body').css({ 'background-size': e.clientY});
	});
});