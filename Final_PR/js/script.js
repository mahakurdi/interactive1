$(document).ready(function() {

n=1;

$('body').click(function(){
	$(this).removeClass();
	$(this).addClass('swap-'+n+'');
	
	if(n > 2){
		n=0;
	}

	n++;

});


});