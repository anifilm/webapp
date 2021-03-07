<?php

// Declaring numbers
$a = 5;
$b = 4;
$c = 1.2;

// Arithmetic operations
echo $a + $b .'<br>'; // 9
echo $a + $b + $c .'<br>'; // 10.2
echo ($a + $b) * $c .'<br>'; // 10.8
echo $a - $b .'<br>'; // 1
echo $a * $b .'<br>'; // 20
echo $a / $b .'<br>'; // 1.25
echo $a % $b .'<br>'; // 1

// Assignment with math operators
//$a = $a + $b;
$a += $b; echo $a.'<br>'; // $a = 9
$a -= $b; echo $a.'<br>'; // $a = 5
$a *= $b; echo $a.'<br>'; // $a = 20
$a /= $b; echo $a.'<br>'; // $a = 5
$a %= $b; echo $a.'<br>'; // $a = 1

// Increment operator
$a++; echo $a.'<br>'; // $a = 2;
echo $a++.'<br>'; // 2
echo $a.'<br>';   // 3
echo ++$a.'<br>'; // 4

// Decrement operator
$a--; echo $a.'<br>'; // $a = 3;
echo $a--.'<br>'; // 3
echo $a.'<br>';   // 2
echo --$a.'<br>'; // 1
echo '<br>';

// Number checking functions
echo is_float(1.25).'<br>'; // true
echo is_double(1.25).'<br>'; // true
echo is_int(5).'<br>'; // true
echo is_numeric("3.14").'<br>'; // true, 문자열 형식의 숫자는 자동 형 변환 후 타입 검사 한다.
echo is_numeric("3g.45"); // false

// Conversion
$strNumber = '12.34';

$number = (float)$strNumber; // 12.34
var_dump($number);
$number = (int)$strNumber; // 12
var_dump($number);
echo '<br>';

$number = floatval($strNumber); // 함수 형식의 형 변환 지원
var_dump($number);
$number = intval($strNumber);   // 함수 형식의 형 변환 지원
var_dump($number);
echo '<br>';

// Number functions
echo "abs(-15) ".abs(-15).'<br>';   // 15
echo "pow(2, 3) ".pow(2, 3).'<br>'; // 8
echo "sqrt(16) ".sqrt(16).'<br>';   // 4
echo "max(2, 3) ".max(2, 3).'<br>'; // 3
echo "min(2, 3) ".min(2, 3).'<br>'; // 2
echo "round(2.4) = ".round(2.4).'<br>'; // 2
echo "round(2.6) = ".round(2.6).'<br>'; // 3
echo "floor(2.6) = ".floor(2.6).'<br>'; // 2
echo "ceil(2.4) = ".ceil(2.4).'<br>';   // 3

// Formatting numbers
$number = 123456789.12345; //

echo number_format($number).'<br>';
echo number_format($number, 2).'<br>';
echo number_format($number, 2, ',', ' ').'<br>';


// https://www.php.net/manual/en/ref.math.php

