<?php
$l = $_POST["login"];
$p = $_POST["Password"];

include('cfg,ph');
$mysqli = new mysqli("SELECT * FROM users WHERE login=$l and password")

echo " Hello - $p  ,Password - $p ";
?>
