<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>PHP Course</title>
</head>
<body>
<?php

// Array
$car1 = "BMW";
$car2 = "Audi";
$car3 = "Mercedes";
echo "{$car1}, {$car2}, {$car3}"."<br>";

$cars = array("BMW", "Audi", "Mercedes");
echo "{$cars[0]}, {$cars[1]}, {$cars[2]}"."<br>";

$myCar = array("Audi", 2015, 75.304);
var_dump($myCar); echo "<br>";
print_r($myCar);  echo "<br>";

$cars2 = array("Volvo", "Chevy", "Volkswagen");

$cars = array_merge($cars, $cars2);
print_r($cars); echo "<br>";

?>
</body>
</html>
