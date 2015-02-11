Number.prototype.pad = function(n, str) {
	return Array(n - String(this).length + 1).join(str || '0') + this;
}

var showRGB = false;

function updateTime() {
	var date = new Date(),
		hours = date.getHours(),
		minutes = date.getMinutes(),
		seconds = date.getSeconds(),
		red = Math.round((255 / 23) * hours),
		green = Math.round((255 / 59) * minutes),
		blue = Math.round((255 / 59) * seconds),
		color = 'rgb(' + red + ',' + green + ',' + blue + ')';
/* console.log(color);
 if(showRGB){
    $('.code').text(color);
  } else {
    $('.code').text('#'+red.toString(16)+green.toString(16)+blue.toString(16));
  }*/
	/*  if(red > 200 && green > 200 && blue > 200){
	    $(".clock-wrapper h1").addClass("light");
	  } else {
	    $(".clock-wrapper h1").removeClass("light");
	  }*/
	$('.clock-wrapper').css('background', color);
}

function updateStart() {
	var date = new Date(),
		hours = date.getHours(),
		minutes = date.getMinutes(),
		seconds = date.getSeconds();

	var hourStart = (hours + minutes / 60) * 5 * 360 / 60,
		minuteStart = (minutes + seconds / 60) * 360 / 60,
		secondStart = seconds * 360 / 60;
	$('.hour').css({
		'transform': 'rotate(' + hourStart + 'deg)',
		'-webkit-transform': 'rotate(' + hourStart + 'deg)',
		'-moz-transform': 'rotate(' + hourStart + 'deg)',
		'-o-transform': 'rotate(' + hourStart + 'deg)',
		'-ms-transform': 'rotate(' + hourStart + 'deg)'
	});
	$('.minute').css({
		'transform': 'rotate(' + minuteStart + 'deg)',
		'-webkit-transform': 'rotate(' + minuteStart + 'deg)',
		'-moz-transform': 'rotate(' + minuteStart + 'deg)',
		'-o-transform': 'rotate(' + minuteStart + 'deg)',
		'-ms-transform': 'rotate(' + minuteStart + 'deg)'
	});
	$('.second').css({
		'transform': 'rotate(' + secondStart + 'deg)',
		'-webkit-transform': 'rotate(' + secondStart + 'deg)',
		'-moz-transform': 'rotate(' + secondStart + 'deg)',
		'-o-transform': 'rotate(' + secondStart + 'deg)',
		'-ms-transform': 'rotate(' + secondStart + 'deg)'
	});
}
setInterval(updateTime, 1000);
updateTime();
updateStart();