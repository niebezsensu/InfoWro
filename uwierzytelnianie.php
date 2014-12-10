
<!DOCTYPE html>
<html lang="pl">
<head>
		<meta charset="UTF-8">
		<title>Uwierzytelnianie</title>
		<link rel="stylesheet" href="css/uwierzytelnianie.css" type="text/css"/>
</head>

<body>
	<?php

	session_start();

	$users = array('bolek' => 'mandarynka1', 'lysy' => '123kot', 'ruda' => 'tablica');
	
	$_SESSION['isLogged'] = false;
	unset($_SESSION['nick']);
	

/*	$name = '';
	if(isset($_SESSION['parasolka'])) {
		$_SESSION['parasolka']  +=1;
	} else {
		$_SESSION['parasolka']  = 0;
	}*/

	?>

	<div id="tlo">
		<h2>Zaloguj się</h2>
		<form id="formularz" action="" method="post">
			<p>Nick: <input type="text" name="nick" required></p>
			<p>Hasło: <input type="password" name="haslo" required></p>
			<p>
				<input type="submit" formnovalidate value="Wyślij"/>
				<input type="reset" value="Wyczyść"/>
			</p>
		</form>
	</div>

	<?php 
		if(isset($_POST['nick']) && isset($_POST['haslo'])){
			$nick = $_POST['nick'];
			$pass = $_POST['haslo'];

		  	if($nick && $pass)
		  	{
		  		echo '<p style="color:blue">Nick to:'.$nick.'</p>';
		  		echo '<p style="color:blue">Haslo to:'.$pass.'</p>';

		  		if(array_key_exists($nick, $users)){
			  		if($users[$nick] == $pass){
			  			$_SESSION['isLogged'] = true;
			  			$_SESSION['nick'] = $nick;
			  			header("Location: /InfoWro/krasnale.php");
			  		}
		  		}else{
		  			echo 'Nie ma Cię!'.'<br>';
		  		}
		  	}
		  	else
		  	{
		  		echo '<p style="color:red">Nie podałeś nicku lub hasła!</p>';
		  	}
	  }
	 ?>

	<!-- Liczba parasolek: <?php echo $_SESSION['parasolka']; ?> -->

</body>