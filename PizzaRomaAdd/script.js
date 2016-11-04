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
<<<<<<< HEAD
=======

let meny = document.getElementById('meny2');
let menydropdown = document.getElementById('meny2dropdown');

meny.addEventListener('mouseover' , function (event) {
	menydropdown.style.transition = 'opacity 0.5s';
	menydropdown.style.opacity = 1;
	menydropdown.style.display = "initial";
})

menydropdown.addEventListener('mouseout' , function (event) {
	menydropdown.style.opacity = 0;
})
>>>>>>> df9dd0131a409378e15566ba93a976addd5c51a9
