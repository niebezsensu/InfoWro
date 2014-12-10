<?php
	session_start();
	//var_dump($_SESSION['isLogged']);
	if(isset($_SESSION['isLogged'])){
		if(!$_SESSION['isLogged']){
			header("Location: /InfoWro/uwierzytelnianie.php");

		}
	}
	else{
		header("Location: /InfoWro/uwierzytelnianie.php");
	}
?>


<!DOCTYPE html>
<html lang="pl">
	<head>
		<meta charset="UTF-8">
		<title>Krasnale</title>
		<link rel="stylesheet" href="css/krasnale-style.css" type="text/css"/>
		
		<link href='http://fonts.googleapis.com/css?family=Indie+Flower' rel='stylesheet' type='text/css'>
		
		<link href='http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300' rel='stylesheet' type='text/css'>

		<link href='http://fonts.googleapis.com/css?family=Indie+Flower' rel='stylesheet' type='text/css'>

		<link href='http://fonts.googleapis.com/css?family=Josefin+Sans' rel='stylesheet' type='text/css'>
	</head>

	<body onload="init()" >


		<div id="par">

			<img id="wally" src="images/wally.png" alt="Wally" width="150" height="164">
			<div id="hide">
				<?php
					echo '<p>Witaj '.$_SESSION['nick'].'!</p>';
				?>
				<h1>Gdzie jest Wally?</h1>
				<button id="refr">Odśwież</button>

			</div>

		</div>


		<div id="light-background">
			<div id="colors">
				<div id="yellowl"></div>
				<div id="bluel"></div>
				<div id="greenl"></div>
				<div id="yellowd"></div>
				<div id="blued"></div>
				<div id="greend"></div>
			</div>

			<div id="links">
			</div>

			
			<p id="font1"><input type="radio" onclick="changeF(1)" name="font" value="one">Grumpy wizards make toxic brew for the evil Queen and Jack.<p>
			
			<p id="font2"><input type="radio" onclick="changeF(2)" name="font" value="two">Grumpy wizards make toxic brew for the evil Queen and Jack.<p>
			
			<p id="font3"><input type="radio" onclick="changeF(3)" name="font" value="three">Grumpy wizards make toxic brew for the evil Queen and Jack.<p>


			

			<section>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</section>

			<div id="rodzicKrasnali">
				<img id="enano1" src="images/krasnal.png" alt="Krasnal" width="200" height="209">

				<img id="enano2" src="images/krasnal2.png" alt="Krasnal" width="150" height="200">

				<img id="enano3" src="images/krasnale3.png" alt="Krasnal" width="250" height="200">

				<img id="enano4" src="images/sleepy.png" alt="Krasnal" width="250" height="200">
			</div>
			<div id="buttons">
				<button id="insBef">Przestaw krasnala</button>
				<button id="repChild">Podmien krasnala</button>
				<button id="remChild">Usun krasnala</button>
			</div>



			<section id="linki">

				<a id="kr" href="http://krasnale.pl/wszystko-o-krasnoludkach/">Krasnoludki</a><br>

				<a id="jed" href="http://nonsensopedia.wikia.com/wiki/Jednoro%C5%BCec">Jednorożce</a>

			</section>

			<section id="forms">
				<form onsubmit="subAlert()" onreset="resAlert()">
					<input type="text" name="name" autofocus><label>&Tab;Imię </label><br>
					
	  				<input type="text" name="surname" required><label>&Tab;Nazwisko</label>
				</form><br>

				<form >
					<input type="radio" name="plec" value="female">Kobieta<br>
					<input type="radio" name="plec" value="male">Mężczyzna
				</form><br>

				<form>
					<strong>Twoje ulubione miejsca we Wrocławiu:</strong><br>
					<input type="checkbox" name="place" value="ostrow">Ostrów Tumski<br>
					<input type="checkbox" name="place" value="train-station">Dworzec Główny<br>
					<input type="checkbox" name="place" value="park">Park Szczytnicki<br>
				</form><br>
				<button id="pok">Ok?</button>
				<button id="res">Reset</button>
				<button id="sub">Submit</button>
			</section>

		</div>
		<div id="circle"></div>

		<script src="js/domdom.js"></script>
	</body>

</html>