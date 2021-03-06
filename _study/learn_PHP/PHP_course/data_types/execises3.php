<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>PHP Course</title>
</head>
<body>
<?php

$x = 4;
$y = 9;
$z = 4;

$average = ($x + $y + $z) / 3;

// number_format() => round()
echo number_format($average, 2, '.', ' ');

?>
</body>
</html>
