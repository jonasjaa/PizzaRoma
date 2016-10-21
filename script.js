function scrollStopMeny(){
	if(document.body.scrollTop > 100){
		document.getElementById('meny').style.top = "0";
		document.getElementById('meny').style.position = "fixed";
	}
	if(document.body.scrollTop < 100){
		document.getElementById('meny').style.top = "100px";
		document.getElementById('meny').style.position = "absolute";
	}
}

window.onscroll = function(){
	scrollStopMeny();
}