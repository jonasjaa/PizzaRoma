/*
FILE NAME: script.js
WRITTEN BY: Erik Stensrud Larsen, Sondre Strande Dahl, Per Erik Korssjøen, Piruthusan Arulnesan, Jonas Jevnaker Aas
WHEN: November 2016
PURPOSE: The JavaScript document, which contains scripting to the whole website. 
We added a googleMap with a marker into our website. Credit: https://developers.google.com/maps/documentation/javascript/adding-a-google-map. | Google. 
*/
/*================================================================================*/
/*Meny fixed to top when scrolling function */

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

/*================================================================================*/
/*Meny dropdown function*/

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

/*================================================================================*/
/*googleMaps*/
/*Credit: https://developers.google.com/maps/documentation/javascript/adding-a-google-map | Google */

function googleMaps() {
        var uluru = {lat: 63.42982, lng: 10.36732};
        var map = new google.maps.Map(document.getElementById('googleMaps'), {
          zoom: 15,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
	  
/*================================================================================*/
/*Image Slide*/	  
	  
let imagecount = 1;
let total = 4;

window.setInterval(function slideA() {
	let image = document.getElementById('img');
	imagecount += 1;
	
	if(imagecount > total){ imagecount = 1}
	if(imagecount < 1){ imagecount = total}
	
	image.src = '../img/slide/img' + imagecount+'.jpg';
	
},2000);