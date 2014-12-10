<?php

//var_dump($_POST);

//define("MAXSIZE", 100);

//echo MAXSIZE;


$cssFile = 'formSt.css';


if(isset($_COOKIE['garnitur'])) {
	$cssFile = $_COOKIE['garnitur'];
	if(isset($_POST['css'])) {
		setcookie('garnitur', $_POST['css'], time() + 10);
		$cssFile = $_POST['css'];
	} 
	
} else if(isset($_POST['css'])){
	setcookie('garnitur', $_POST['css'], time() + 10);
	$cssFile = $_POST['css'];
}





?>



<!DOCTYPE html>
<html lang="pl">
	<head>

		<meta charset="UTF-8">
		<title>Zarejestruj się</title>
		<link rel="stylesheet" href="css/<?php echo $cssFile ?>" type="text/css"/>

	</head>

	<body>
		<h2>Wypełnij formularz</h2>

		<?php

			//$name = '';
			//$email = '';
			//$name = $_POST['name'];
			//$email = $_POST['e-mail'];

			//$tab = array('el1', 'el2');
			//echo $tab[0];

			// $tabl = array('key' => 'value');
			// $tabl['k1'] = 'va\1';
			// echo $tabl['k1'];

			//$arr = array(1, 2, 3, 4);

			// while ($elem = current($tabl)) {
			//     if ($elem == 'va1') {
			//         echo key($tabl).'<br />';
			//     }
			//     next($tabl);
			// }

			echo 'Twój numer IP to: '.$_SERVER['REMOTE_ADDR'].'<br>';

			//echo strcmp("zala","kot").'</br>';

			//echo count($tabl);

			$emailReg = "/[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}/";
			$teleReg = "/[0-9]{9}/";
			$nickReg = "/[a-zA-Z]{5}[0-9]{2}/";
		?>

		<form id="form1" action="" method="post"  autocomplete="on">
			<fieldset>
				<legend><strong>Dane</strong></legend>
				<p>
					
	  				<input type="text" name="name" autofocus><label>&Tab;Imię </label><br>
					<?php if(isset($_POST['name'])) { ?>
	  						<p style="color:blue">Twoje imie to: <?php echo $_POST['name'];?></p>
	  					<?php } else { ?>
	  						<p style="color:red">Nie podałeś imienia!</p>
	  					<?php } ?>


	  				<input type="text" name="surname" required><label>&Tab;Nazwisko</label><br>
	  				<?php 
	  					if(isset($_POST['surname']))
	  					{
	  						echo '<p style="color:blue">Twoje nazwisko to:'.$_POST['surname'].'</p>';
	  					}
	  					else
	  					{
	  						echo '<p style="color:red">Nie podałeś nazwiska!</p>';
	  					}
	  				?>

	  				<input type="text" name="nickname"><label>&Tab;Nick &lpar;<i>abcde12</i>&rpar;</label><br>
					<?php 
	  					if(!preg_match($nickReg, isset($_POST['nickname'])))
	  					{
	  						echo '<p style="color:red">Niewłaściwy format nicku!</p>';
	  					}
	  					else
	  					{
	  						echo '<p style="color:blue">Twój nick to: '.$_POST['nickname'].'</p>';
	  					}
	  				?>


	  				<input type="email" name="e-mail" required><label>&Tab;E-mail &lpar;<i>exam@ple.pl</i>&rpar;</label><br>
	  				<?php 
	  					if(!preg_match($emailReg, isset($_POST['e-mail'])))
	  					{ ?>
	  						<p style="color:red">Niewłaściwy format e-maila!</p>
	  					<?php } ?>
	  				
	  				<input type="tel" name="tele"><label>&Tab;Telefon &lpar;<i>123456789</i>&rpar;</label><br>
	  				<?php 
	  					if(!preg_match($teleReg, isset($_POST['tele'])))
	  					{
	  						echo '<p style="color:red">Niewłaściwy format telefonu!</p>';
	  					}
	  				?>

	  				<input list="months">
	  					<datalist id="months">
						  <option value="Styczeń">
						  <option value="Luty">
						  <option value="Marzec">
						  <option value="Kwiecień">
						  <option value="Maj">
						  <option value="Czerwiec">
						  <option value="Lipiec">
						  <option value="Sierpień">
						  <option value="Wrzesień">
						  <option value="Październik">
						  <option value="Listopad">
						  <option value="Grudzień">
						</datalist><label>&Tab;Miesiąc urodzin &lpar;<i>wybierz</i>&rpar;</label><br>
	  				
	  				<input type="password" name="password"><label>&Tab;Hasło</label>
	  			</p>

	  			<p>
	  				<input type="radio" name="plec" value="female">Kobieta<br>
					<input type="radio" name="plec" value="male">Mężczyzna
				</p>

				<p>
					<strong>Twoje ulubione miejsca we Wrocławiu:</strong><br>
					<input type="checkbox" name="place[]" value="ostrow">Ostrów Tumski<br>
					<input type="checkbox" name="place[]" value="train-station">Dworzec Główny<br>
					<input type="checkbox" name="place[]" value="park">Park Szczytnicki<br>
					<input type="checkbox" name="place[]" value="marketplace">Rynek<br>
					<input type="checkbox" name="place[]" value="pergola">Pergola
				</p>

				<p>
					<strong>Wybierz garnitur</strong><br>
					<select name="css">
					<option value="formSt.css">Standard</option>
					<option value="garnitur1.css">Niebieski</option>
					<option value="garnitur2.css">Zielony</option>
					<option value="garnitur3.css">Żółty</option>
					</select>
				</p>

				<p>
					<strong>Uwagi:</strong><br>
					<textarea rows="4" cols="50" maxlength="200"> </textarea>
				</p>

				<p>
					<input type="submit" formnovalidate value="Wyślij"/>
					<input type="reset" value="Wyczyść"/>
				</p>
			</fieldset>
		</form>

		<div id="result">
			<p>Twoje dane:</p>
			<?php
			foreach ($_POST as $key => $value) {
				echo $key.':';
				if(gettype($value) == 'array')
				{
					echo 'Zaznaczone opcje:<br>';
					foreach ($value as &$va) {
						echo $va.', ';
					}
					echo '<br>';
				}else
	    		echo $value.'<br>';
			}
			?>
		</div>

		<footer>
			<p>&copy; 2014 Karolina i Asia. All rights reserved.</p>
		</footer>
	</body>

</html>