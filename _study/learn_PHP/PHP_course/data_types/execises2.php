<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>PHP Course</title>
</head>
<body>
<?php

$price = 100;
$vat = 0.21;

$totalPrice = ($price * $vat) + $price;

echo "Price: ".$price."<br>";
echo "VAT: ".$vat."<br>";
echo "Total price: ".$totalPrice."<br>";

?>
</body>
</html>
