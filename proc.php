<?php
$l = $_POST["login"];
$p = md5($_POST["Password"]);

include('cfg.php');
$result = $mysqli->query("SELECT * FROM projekts WHERE login='$l' AND password='md5($p)'");
if (mysqli_num_rows($result) > 0){
    echo "GOOOD!!!";

}
else{
    echo "bye bye!!!";
}


?>

