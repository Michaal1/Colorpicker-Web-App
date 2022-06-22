
var w = window.innerWidth;
var body = document.getElementById("body");
let bWConstant = 1 ;
let bodyWidth = window.innerWidth*1;
let length = 0;
body.style.width="bodyWidth";




function saveColor() {

	body.style.width=""+ bodyWidth +"px";
	let bodyCS = window.getComputedStyle(body);
	let background =bodyCS.backgroundColor;

	const object = document.createElement("div");
	object.classList.add("object");
    object.setAttribute("id",length);
    object.classList.add(length);
	const objectAll = document.getElementsByClassName("object");
	object.style.backgroundColor = background;
	document.body.appendChild(object);

	const colorCodeBox = document.createElement("div");
	colorCodeBox.classList.add("codeBox");
	object.appendChild(colorCodeBox);

	const colorCode = document.createElement("span");
	colorCode.classList.add("colorCode");
	colorCode.setAttribute("id",length+1000);
	colorCodeBox.appendChild(colorCode);
	colorCode.innerHTML = background;

	const copyLink = document.createElement("span");
	copyLink.classList.add("copy");
	copyLink.innerHTML="copy";
	let id = length+1000;

	copyLink.onclick = function() { copyCode(id)};
	colorCodeBox.appendChild(copyLink);

	const settings = document.createElement("div");
	settings.classList.add("settBox");
	object.appendChild(settings);

	const cross = document.createElement("div");
    cross.classList.add("cross");
	object.classList.add(length);
	let parametere = length; 
	
	cross.onclick = function() { deleteColor(parametere)};
	settings.appendChild(cross);

	const leftLine = document.createElement("div");
	leftLine.classList.add("leftLine");
	cross.appendChild(leftLine);

	const rightLine = document.createElement("div");
	rightLine.classList.add("rightLine");
	cross.appendChild(rightLine);
	let click = document.getElementById("click-info");
	length= length+1;


	if (length  ===1) {
		bodyWidth = bodyWidth*0.75 ;

		object.style.width = "25%";
		body.style.width=""+ bodyWidth +"px";

	
	} else if(length  ===2){
		bodyWidth = window.innerWidth*1; 
		bodyWidth = bodyWidth*0.60;
		object.style.width = "20%";
		object.style.left = "20%";
		document.querySelector(".object").style.width= "20%";
		body.style.width=""+ bodyWidth +"px";


	} else if(length  ===3) {
		bodyWidth = window.innerWidth*1; 
		bodyWidth = bodyWidth* 0.55 ;
		object.style.left = "30%";
		object.style.width = "15%";

		for (var i = 0; i < objectAll.length; i++) {
			objectAll[i].style.left = ""+ i*15 +"%";
			objectAll[i].style.width = "15%";
		}
		body.style.width=""+ bodyWidth +"px";

	} else if(length  ===4) {
		for (var i = 0; i < objectAll.length; i++) {

			object.style.left = "42%";
			objectAll[i].style.width = "14%";
			objectAll[i].style.left = ""+ i*14 +"%";
		}

		bodyWidth = window.innerWidth*1; 
		bodyWidth = bodyWidth*0.46;
		body.style.width=""+ bodyWidth +"px";

	} else if(length  > 4){
		if (length  < 20) {
			for (var i = 0; i < objectAll.length; i++) {
			let a = i ;
			let iIndex = i*3;
			bodyWidth = window.innerWidth*1; 
			bodyWidth = (bodyWidth*0.40) - objectAll.length*25;
			let width = (100-(bodyWidth/window.innerWidth*100))/ objectAll.length;
			object.style.width = "" + width +"%";
			object.style.left = " "+ width*objectAll.length +"%";
			objectAll[i].style.left =  "" + width*i +"%";
			objectAll[i].style.width = "" + width +"%";
			body.style.width=""+ bodyWidth+"px";
			}
		} else {
			object.remove()
			lenght = lenght-1
		}
	}
}

function deleteColor(clas) {
	const crossBtns = document.getElementsByClassName("cross");
	let click = document.getElementById("click-info");
	let obj = document.getElementById(clas);
	let objCS= window.getComputedStyle(obj);
	let width = objCS.width;

	let elementsToDelete = document.getElementsByClassName(clas)
	lenght= length-1;
	for (let i = 0; i < elementsToDelete.length; i++) {
		elementsToDelete[i].remove()
	}
	length = length-1;
	let objectAll = document.getElementsByClassName("object");
	let count = length-clas;

	if (length ===0) {
		bodyWidth = window.innerWidth*1;
		body.style.width=""+ bodyWidth +"px"; 
	}

	if (length ===1) {
		bodyWidth = window.innerWidth*1;
		bodyWidth = bodyWidth*0.75 ;
		for (var i = 0; i < objectAll.length; i++) {
			objectAll[i].style.width = "25%";
			objectAll[i].style.left = "0%";
		}

		body.style.width=""+ bodyWidth +"px";

	} else if(length ===2){
		bodyWidth = window.innerWidth*1; 
		bodyWidth = bodyWidth*0.60;
		for (var i = 0; i < objectAll.length; i++) {
			objectAll[i].style.left = ""+ i*20 +"%";
			objectAll[i].style.width = "20%";
		}

		body.style.width=""+ bodyWidth +"px";

	} else if(length  ===3) {
		bodyWidth = window.innerWidth*1; 
		bodyWidth = bodyWidth* 0.55 ;
		for (var i = 0; i < objectAll.length; i++) {
			objectAll[i].style.left = ""+ i*15 +"%";
			objectAll[i].style.width = "15%";
		}
		body.style.width=""+ bodyWidth +"px";

	} else if(length  ===4) {
		for (var i = 0; i < objectAll.length; i++) {
			objectAll[i].style.width = "14%";
			objectAll[i].style.left = ""+ i*14 +"%";

		}
		bodyWidth = window.innerWidth*1; 
		bodyWidth = bodyWidth*0.46;
		body.style.width=""+ bodyWidth +"px";
		
	} else if(length > 4){
		for (var j = 0; j < objectAll.length; j++) {
			
			let iIndex = j*3;
			bodyWidth = window.innerWidth*1; 
			bodyWidth = (bodyWidth*0.40) - objectAll.length*25;
			let width = (100-(bodyWidth/window.innerWidth*100))/ objectAll.length;
			objectAll[j].style.left =  "" + width*j +"%";
			objectAll[j].style.width = "" + width +"%";
			body.style.width=""+ bodyWidth+"px";	

		}}	
} 

function copyCode (idNumber){
	var code = document.getElementById(idNumber);
	window.navigator.clipboard.writeText(code.innerText);
}

window.addEventListener("mousemove", function (e){

	let click = document.getElementById("click-info")
	var w = window.innerWidth;

	var h = window.innerHeight;
	let hConstant = h/255;
	let wConstant =  bodyWidth/765;
	if (length === 0){
		bodyWidth= w;
	}
	 
	let constatn =-e.x+w;
	if (constatn>bodyWidth) {


	} else {
		let widthBodyDiference = w-bodyWidth;
		let X =  Math.round(e.x/-wConstant);
		let Y =  Math.round(e.y/hConstant);
		wConstant =  bodyWidth/765;
		let xConst = (-e.x + widthBodyDiference)/wConstant;
		

		if (xConst < 0){
			let R = 2*Y;
			if ( R > 255) {
				R = 255;

			}
			if (R < 0) {
				R = 0;

			}
			let G = Y*2 - xConst -255;
			if ( G > 255) {
				G = 255;

			}
			if (G < 0) {
				G = 0;

			}
			let B = Y*2 - 255;
			if ( B > 255) {
				B = 255;
	
			}
			if (B < 0) {
				B = 0;
	
			}
			document.getElementById("body").style.background="rgb("+R+","+G+","+B+")";
			document.getElementById("code").innerHTML =  "rgb("+Math.round(R)+","+ Math.round(G)+","+ Math.round(B)+")";

            if ( xConst < -255){

				let G = 2*Y;
				if ( G > 255) {
					G = 255;
					
				}
				if (G < 0) {
					G = 0;
					
				}

				let R = Y*2 + xConst +255;
				if ( R > 255) {
					R = 255;

				}
				if (R < 0) {
					R = 0;

				}

				let B = Y*2 - 510 - xConst;
				if ( B > 255) {
					B = 255;
		
				}
				if (B < 0) {
					B = 0;
		
				}
				
				document.getElementById("body").style.background="rgb("+R+","+G+","+B+")";
				document.getElementById("code").innerHTML =  "rgb("+Math.round(R)+","+Math.round(G)+","+Math.round(B)+")";
		
				if(xConst < -510){

					let R = Y*2 - xConst -760;
					if ( R > 255) {
						R = 255;

					}
					if (R < 0) {
						R = 0;

					}

					let B = 2*Y;
					if ( B > 255) {
						B = 255;
			
					}
					if (B < 0) {
						B = 0;
			
					}

					let G = Y*2 + xConst +510;
					if ( G > 255) {
						G = 255;
						
					}
					if (G < 0) {
						G = 0;	
					}
				
					document.getElementById("body").style.background="rgb("+R+","+G+","+B+")";
					document.getElementById("code").innerHTML =  "rgb("+Math.round(R)+","+Math.round(G)+","+Math.round(B)+")";
	}	}}		}
});



body.style.width="bodyWidth";
