<?php
$host = 'localhost';
$root = 'root';
$passwor = '';
$database = 'dawood_project';

$con = mysqli_connect($host, $root, $passwor, $database);

// if ($con){
//     echo "connecting to database";
// }
// else{
//     echo "error";
// }

if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $db = $_POST['db'];
    $State = $_POST['state'];
    $credit = $_POST['credit'];
    $household = $_POST['household'];

   $sql =  "INSERT INTO `student`(`name`, `phone`,`DB`, `state`, `credit`, `household`)  VALUES  ($name,$phone , $db, $state , $credit , $household)";

   $run = mysqli_query($con , $sql);
   if ($run){
    echo "Success";
   }


}
?>