

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

window.addEventListener("contextmenu", myFunction);
function myFunction(){
    alert("Użyłeś prawego przycisku myszy!");
}

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

