// JavaScript Document
var size = 18;
var text = document.getElementById("main");

function increase() {
	if(size <= 40){
	size= size+4;
	text.style.fontSize = size + "px";		
	}
}

function decrease() {
	if(size >= 14){
	size= size-4;
	text.style.fontSize = size + "px";		
	}
}


document.getElementById("plus").addEventListener("click", function(){increase();});
document.getElementById("minus").addEventListener("click", function(){decrease();});