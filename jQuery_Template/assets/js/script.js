$(document).ready(function(){
	// your code here

	var n = 1;
	
	$('body').click(function(){
		
		var redvalue = Math.floor(Math.random()*255)
		var redvalue = Math.floor(Math.random()*255)
		
		$('#content').html('hi');

		$('#content').css('transform', 'rotate('+redvalue+','+n+','+n+')');
		$('body').css('background-color', 'rgb('+redvalue+','+bluevalue+','+n+')');
	
		alert(n);
		
		n = n +10;
	});

});