<?php

session_start();


$name = '';
var_dump($_COOKIE);
if(isset($_SESSION['parasolka'])) {
	$_SESSION['parasolka']  +=1;
} else {
	$_SESSION['parasolka']  = 0;
}
if(isset($_POST['name'])) {
	$name = $_POST['name'];
	setcookie('name', $name);
}
if(isset($_COOKIE['name'])) {
	$name = $_COOKIE['name'];
}

switch ($name) {
	case 'bialy':
		$css = 'bialy.css';
		break;
	case 'czarny':
		$css = 'czarny.css';
		break;
	default:
		$css = 'fioletowy.css';
		break;
}
$tablica = array('key' => 'value')
?>



Liczba parasolek: <?php echo $_SESSION['parasolka']; ?>
<form id="form1" action="form3.php" method="POST" autocomplete="on">
			<fieldset>
				<legend><strong>Dane</strong></legend>
				<p>
					
	  				<input type="text" name="name" value="<?php echo $name; ?>">
	  					<?php if(true == $name) { ?>
	  						<br> <label>Twoje imie to: <?php echo $name;?></label><br>
	  					<?php } else { ?>
	  						<label>Podaj imie</label><br>
	  					<?php } ?>

				<p>
					<input type="submit"  value="Wyślij"/>
				</p>
			</fieldset>
		</form>
