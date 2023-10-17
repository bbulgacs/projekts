<?php
$v = $_POST["vards"];
$u = $_POST["uzvards"];
$l = $_POST["login"];
$p = md5($_POST["Password"]);

include('cfg.php');
$result = $mysqli->query("INSERT INTO `projekts`(`id`, `name`, `sname`, `login`, `password`) VALUES (null,'$v','$u','$l','$p')");


?>