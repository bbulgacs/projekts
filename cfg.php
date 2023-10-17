<?php
$servername = "localhost";
$username = "root";
$password = "";
$db = "projekts1";



// Create connection
$mysqli = new mysqli($servername, $username, $password, $db);
if ($mysqli -> connect_errno)
{ echo "aaaaaa";
}
?>


