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
	btn2.addEventListener('click', function(){changeC(what, color)}, false);       

	btn3 = document.createElement("BUTTON");        
	t3 = document.createTextNode("CLICK ME");       
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

}

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


function changeC(whatt, co){
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


	if(what == 1){
		console.log("zmieniam tlo na "+col);
		document.body.style['background-color'] = col;
	}else{

	}
}



/*

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