<?php

if(empty($_POST['submit']))
    
{
    echo "Form is not submitted!";
    exit;
}

if(empty($_POST["fullname"]) ||
    empty($_POST["email"]))
{
    echo "Please fill the form"
        exit;
}
$name = $_POST["fullname"];
$email = $_POST["email"];
$date = $_POST["birth"];
$phone = $_POST["phone"];
$state = $_POST["state"];

mail ( 'jerrod.thomas@gmail.com' , 'New form submission' , "New form submission: Name: $name, Email: $email, Birth: $date, Phone: $phone, State: $state" );

header('Location: thanks.html');
    ?>
