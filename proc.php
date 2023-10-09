<?php
$l = $_POST["login"];
$p = $_POST["Password"];

include('cfg,ph');
$mysqli = new mysqli("SELECT * FROM users WHERE login=$l AND password$p")
if(mysqli_num_rows($result) > 0){
    echo "GOOOD!!!";

}

echo " Hello - $l  ,Password - $p ";
?>
