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



let meny = document.getElementById('meny2');
let meny2dropdown = document.getElementById('meny2dropdown');
let dropdownting = document.getElementsByClassName('dropdownting');

/* Mouseover functions */

meny.addEventListener('mouseover' , function (event) {
	meny2dropdown.style.opacity = 1;
    meny2dropdown.style.display = "initial";
})

/* Mouseout functions*/

meny2dropdown.addEventListener('mouseout' , function (event) {
    meny2dropdown.style.display = "none";
    
})

meny.addEventListener('mouseout' , function (event) {
    meny2dropdown.style.display = "none";
    
})