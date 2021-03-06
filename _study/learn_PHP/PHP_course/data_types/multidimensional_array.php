<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>PHP Course</title>
</head>
<body>
<?php

// Multidimensional Array

// Expensive
// Audi, Mercedes, BMW

// Inexpensive
// Volvo, Ford, Toyota

$cars = array(
  "Expensive" => array("Audi", "Mercedes", "BMW"),
  "Inexpensive" => array("Volvo", "Ford", "Toyota"),
);

print_r($cars["Expensive"]);   echo "<br>";
print_r($cars["Inexpensive"]); echo "<br>";

echo $cars["Expensive"][1]."<br>";
echo $cars["Inexpensive"][2]."<br>";

?>
</body>
</html>
