window.onload = function time(){
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes(); 
	var seconds = date.getSeconds(); 
	document.querySelector('.clock').innerHTML = `<h1 class='time'>${hours}:${minutes}:${seconds}</h1>`
	setInterval(time, 1);
};
