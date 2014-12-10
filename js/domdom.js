var btn1, btn2, btn3, what = 0, col = 0, 
	t1, t2, t3, tloc, fontc, color, what,
	co1, co2, co3, co4, co5, co6;

var butBack, butFont;

function init(){
	var btn1 = document.createElement("BUTTON");        
	var t1 = document.createTextNode("DODAJ LINK");       
	btn1.appendChild(t1);             

	btn2 = document.createElement("BUTTON");        
	t2 = document.createTextNode("ZMIEN KOLOR");       
	btn2.appendChild(t2);        
	btn2.addEventListener('click', function(){changeC(what, color, event)}, false);       

	btn3 = document.createElement("BUTTON");        
	t3 = document.createTextNode("RUSZ OBRAZKI");       
	btn3.appendChild(t3);              

	 

	butBack = document.createElement("BUTTON"); 
	tloc = document.createTextNode("tło "); 
	butBack.appendChild(tloc); 
	butBack.addEventListener('click', function(){what=1;}, false);

	butFont = document.createElement("BUTTON");
	fontc = document.createTextNode("czcionka"); 
	butFont.appendChild(fontc); 
	butFont.addEventListener('click', function(){what=0;}, false);

	document.getElementById("light-background").appendChild(btn1);
	document.getElementById("light-background").appendChild(btn2);
	document.getElementById("light-background").appendChild(btn3);

	document.getElementById("light-background").appendChild(butBack);
	document.getElementById("light-background").appendChild(butFont);

	  btn2.addEventListener("mouseover", function( event ) {   
    event.target.style.color = "red";

    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);

	  btn3.addEventListener('click', function(){rotImgs();});

}

refr = document.getElementById('refr');
refr.addEventListener('click', function(){location.reload();});

wally = document.getElementById('wally');
wally.addEventListener('mousedown', function(){wally.style['transform']='translateX(-100px)';});

co1 = document.getElementById('yellowl');
co1.addEventListener('click', function(){color=1;}, false);

co2 = document.getElementById('bluel');
co2.addEventListener('click', function(){color=2;}, false);

co3 = document.getElementById('greenl');
co3.addEventListener('click', function(){color=3;}, false);

co4 = document.getElementById('yellowd');
co4.addEventListener('click', function(){color=4;}, false);

co5 = document.getElementById('blued');
co5.addEventListener('click', function(){color=5;}, false);

co6 = document.getElementById('greend');
co6.addEventListener('click', function(){color=6;}, false);

var cir = document.getElementById('circle');
document.addEventListener('click', function(){moveCircle(event);});


function changeC(whatt, co, e){
	console.log("what: "+ whatt);
	console.log("co: "+ co);
	var col;
	switch(co){
		case 1: col = "#FFEB9D"; break;
		case 2: col = "#B8DCFD"; break;
		case 3: col = "#D1E8C8"; break;
		case 4: col = "#F2C305"; break;
		case 5: col = "#526684"; break;
		case 6: col = "#54694B"; break;
		default: break;
	}


	if(e.altKey){
		console.log("zmieniam tlo na "+col+" ctrl: "+event.altKey);
		document.body.style['background-color'] = col;
		
		alert( "keyCode dla klawisza: " + e.keyCode + "\n" );
	}else{
		console.log("zmieniam kolor czcionki na "+col);
		document.body.style['color'] = col;
	}
}

function moveCircle(e){
	var x = e.clientX;     // Get the horizontal coordinate
	var y = e.clientY;     // Get the vertical coordinate
	var coor = "X coords: " + x + ", Y coords: " + y;
	
console.log(coor);
	cir.style.marginLeft = x + 'px';
    cir.style.marginTop = y + 'px';

    cir.style.width = cir.offsetWidth + 3+'px';
    cir.style.height = cir.offsetHeight + 3+'px';

    console.log("xnaprawde: "+cir.style.marginLeft+" ynaprawde: "+cir.style.marginTop);

    cir.style['opacity'] = "0.4";

}

co1.addEventListener("mouseover", function( event ) {   
    // highlight the mouseenter target
    event.target.style['background-color'] = "purple";

    // reset the color after a short delay
    setTimeout(function() {
      event.target.style['background-color'] = "";
    }, 1000);
  }, false);


//var selectFormElement = document.forms[index].elements[index];

document.getElementById('pok').addEventListener('click', function(){checkit();});
document.getElementById('res').addEventListener('click', function(){resetAll();});
document.getElementById('sub').addEventListener('click', function(){submitAll();});

document.getElementById('insBef').addEventListener('click', function(){insBef();});
document.getElementById('repChild').addEventListener('click', function(){repChild();});
document.getElementById('remChild').addEventListener('click', function(){remChild();});

var en1 = document.getElementById('enano1');
var en4 = document.getElementById('enano4');
var en3 = document.getElementById('enano3');
var en2 = document.getElementById('enano2');

function repChild(){
	en4.style['display'] = 'block';
	document.getElementById('rodzicKrasnali').replaceChild(en4, en1);

}

function remChild(){

	document.getElementById('rodzicKrasnali').removeChild(en2);

}

function insBef(){
	document.getElementById('rodzicKrasnali').insertBefore(en3, en2);
}

function resetAll(){
	var forms = document.forms;

	for(var i = 0; i < forms.length; i++) {

		forms[i].reset();
	}
}

function changeF(nr){
	var bod = document.body;
	switch(nr){
		case 1: bod.style['font-family'] = 'Open Sans Condensed'; break;
		case 2: bod.style['font-family'] = 'Indie Flower'; break;
		case 3: bod.style['font-family'] = 'Josefin Sans'; break;
		default: break;
	}
}

function submitAll(){
	var forms = document.forms;

	for(var i = 0; i < forms.length; i++) {

		forms[i].submit();
	}
}

function resAlert(){
	alert("Zresetowano formularz");
}

function subAlert(){
	alert("Wysłano formularz");
}

function checkit(){
	var forms = document.forms;

	for(var i = 0; i < forms.length; i++) {
		console.log("forms[1].elements[1].value: "+forms[1].elements[1].value);
		if(forms[i].elements[1].value == "")
		{
			alert("Drugi element formularza nie może być pusty!");
		}
	}
}

function showLinks(){
	var links = document.links;
	for(var i = 0; i < links.length; i++) {
	  var linkHref = document.createTextNode(links[i].href);
	  var lineBreak = document.createElement("br");
	  document.getElementById('linki').appendChild(lineBreak);
	  document.getElementById('linki').appendChild(linkHref);
	  
	}
}

function rotImgs(){
	var ilist = document.images;
	console.log("liczba obrazkow "+ilist.length);
	ilist.item(3).style['opacity'] = '0.2';
	ilist.namedItem('enano2').style['opacity'] = '0.2';

	console.log(ilist.item(1).src);
	for(var i = 0; i < ilist.length; i++) {

		if(ilist[i].id != 'wally'){
	    	animateIm(ilist[i]);
		}
	}
	showLinks();
}

function animateIm(obr){
	obr.style['transform'] = 'rotate(180deg)';
}

/*
<p>In this example, the text field gets focus immediately after the document window has been loaded.</p>
 
<input type="text" id="myText" value="A text field">

<script>
window.onload = function() {
  document.getElementById("myText").focus();
};
</script>



var linksList = document.links;
for (var i = 0; i < linksList.length; ++i)
{
    ...
    [code to print links to HTML paragraph]
    ...
}

var insertedElement = parentElement.insertBefore(newElement, referenceElement);

replacedNode = parentNode.replaceChild(newChild, oldChild);

var oldChild = element.removeChild(child); element.removeChild(child);

//------------------------------------------------
// <div>
//  <span id="childSpan">foo bar</span>
// </div>

// create an empty element node
// without an ID, any attributes, or any content
var sp1 = document.createElement("span");

// give it an id attribute called 'newSpan'
sp1.setAttribute("id", "newSpan");

// create some content for the new element.
var sp1_content = document.createTextNode("new replacement span element.");

// apply that content to the new element
sp1.appendChild(sp1_content);

// build a reference to the existing node to be replaced
var sp2 = document.getElementById("childSpan");
var parentDiv = sp2.parentNode;

// replace existing node sp2 with the new span element sp1
parentDiv.replaceChild(sp1, sp2);

// result:
// <div>
//   <span id="newSpan">new replacement span element.</span>
// </div>
//------------------------------------------------

if (node.parentNode) {
  // remove a node from the tree, unless 
  // it's not in the tree already
  node.parentNode.removeChild(node);
}

Node.childNodes
Node.firstChild
Node.lastChild
Node.nodeType
Node.nodeValue
*/