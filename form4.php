<?php

session_start();


$name = '';
if(isset($_SESSION['parasolka'])) {
	$_SESSION['parasolka']  +=1;
} else {
	$_SESSION['parasolka']  = 0;
}

?>



Liczba parasolek: <?php echo $_SESSION['parasolka']; ?>

