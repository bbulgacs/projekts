<?php
$v = $_POST["vards"];
$u = $_POST["uzvards"];
$l = $_POST["login"];
$p = md5($_POST["Password"]);

include('cfg.php');
$result = $mysqli->query("UPDATE `projekts` SET `id`=null,`name`='$v',`sname`='$u',`login`='$l',`password`='$p'");

?>