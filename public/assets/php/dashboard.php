<?php
$server = "localhost";
$username = "root";
$password = "";

$con = mysqli_connect($server, $username, $password);

if (!$con) {
    die("connect failed");
}
echo "Successfully connected";


// INSERT INTO `password` (`state`, `district`, `username`, `password`, `date`) VALUES ('Andhra Pradesh', 'East Godavari', 'rishav', 'hello', current_timestamp());
