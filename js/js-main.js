//document.writeln("Witaj świecie");
//window.alert("Witaj świecie");
//document.getElementById("blok").innerHTML = "Witaj świecie";

function Display() {

	if(document.getElementById("dane").value == "")
	{
		var name = window.prompt("Wpisz coś!");
		if(name != null)
		{
			document.getElementById("result").innerHTML = "Twoja propozycja: " + 
			name; 
		}
	}
	else
	{
		document.getElementById("result").innerHTML = "Twoja propozycja: " + 
		document.getElementById("dane").value; 
	}
}


/*
document.getElementById("result").addEventListener("click", function(){
    document.getElementById("siemka").style.visibility="visible";
});*/
/*
document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
    document.getElementById("demo").innerHTML = "blalalalalalalalal";
*/
window.addEventListener("contextmenu", myFunction);
function myFunction(){
    alert("Użyłeś prawego przycisku myszy!");
}

/*
document.getElementById("hate").addEventListener("click", function(){
	document.getElementById("enano").style.visibility="hidden";
	document.getElementById("siemka").style.visibility="hidden";
}); //NIE DZIALA


document.getElementById("fb").addEventListener("click", function(){
	window.alert("Nie marnuj czasu!");
}); 
*/
function fbalert()
{
	window.alert("Nie marnuj czasu!");
}

var rInt = 0;
var rFloat = 0.0;

function getRand()
{
	rFloat = Math.random() * (100 - 1) + 1;
	rInt = Math.floor(rFloat);
	document.getElementById("result1").innerHTML = Math.round(rFloat * 100) / 100;
}

function calculate()
{
	var usernr = parseInt(document.getElementById("nrstring").value);
	var res = parseInt(document.getElementById("result1").value) + usernr;
	document.getElementById("result2").innerHTML =  usernr + rInt;
	document.getElementById("result3").innerHTML =  usernr + Math.round(rFloat * 100) / 100;
}

var i = 0;
while(i < 4)
{
	document.writeln("siemka");
	++i;
}

/*
function Hate(){
		document.getElementById("enano").style.visibility="hidden";
		document.getElementById("siemka").style.visibility="hidden";
}

function Like(){
		document.getElementById("enano").style.visibility="visible";
}
*/
/*

instrukcje sterujące: case,  do...while, for

+while,
+document.writeln()
+parseFloat()
+button.addEventListener()
+if...else
+document.getElementById()
+window.prompt()
+window.alert()
+window.addEventListener()
+właściwość innerHTML
+parseInt()
+Math.random()
+Math.floor()
+zmienne globalne
*/