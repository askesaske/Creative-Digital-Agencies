mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

var t;
function topFunction() {
  var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
	if(top > 0) {
		window.scrollBy(0,-100);
		t = setTimeout('topFunction()', 10);
	} else clearTimeout(t);
	return false;
}

var check = 0;
var w;
function scrollDownFunction() {
	if(check < 900) {
		window.scrollBy(0, 100);
		w = setTimeout('scrollDownFunction()', 20);
		check = check + 100;
	}
	else {
		clearTimeout(w);
		check = 0;	
	} 
	return false;
}