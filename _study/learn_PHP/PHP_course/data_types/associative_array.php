<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>PHP Course</title>
</head>
<body>
<?php

// Associative Array
$car1["Audi"] = 50.500;
echo $car1["Audi"]."<br>";

$car1["addCar"] = 10.0;

print_r($car1); echo "<br>";

$cars = array("Audi" => 50.500, "BMW" => 40.700, "Mercedes" => 60.300);
print_r($cars); echo "<br>";

foreach ($cars as $key => $value) {
  echo "My ".$key." has ".$value." mileage<br>";
}

?>
</body>
</html>
