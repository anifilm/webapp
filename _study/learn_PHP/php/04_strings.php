<?php

// Create simple string
$name = 'Zura';
$string = 'Hello, I am '.$name.'. I am 28';
$string2 = "Hello, I am {$name}. I am 28";
echo $string.'<br>';
echo $string2.'<br>';

// String concatenation
echo 'Hello '.' world'.' and PHP'.'<br>';

// String functions
$string = "     Hello, world!     ";

echo "1 - ".strlen($string).'<br>'; // 23
echo "2 - ".trim($string).'<br>';   // "Hello, world!"
echo "3 - ".ltrim($string).'<br>';  // "Hello, world!     "
echo "4 - ".rtrim($string).'<br>';  // "     Hello, world!"
echo "5 - ".str_word_count($string).'<br>'; // 2
echo "6 - ".strrev($string).'<br>'; // "!dlrow ,olleH"
echo "7 - ".strtoupper($string).'<br>'; // "HELLO, WORLD!"
echo "8 - ".strtolower($string).'<br>'; // "hello, world!"
echo "9 - ".ucfirst('hello').'<br>';  // "Hello"
echo "10 - ".lcfirst('HELLO').'<br>'; // "hELLO
echo "11 - ".ucwords('hello world').'<br>'; // "Hello World"
echo "12 - ".strpos($string, 'world').'<br>';  // 12
echo "13 - ".stripos($string, 'world').'<br>'; // 12
echo "14 - ".substr($string, 8).'<br>';  // "lo, world!"
echo "15 - ".str_replace('world', 'PHP', $string).'<br>';  // "Hello PHP"
echo "16 - ".str_ireplace('World', 'PHP', $string).'<br>'; // "Hello PHP"
echo '<br>';

// Multiline text and line breaks
$longText = "
  Hello, my name is Zura.
  I am 27,
  I love my daughter.
";
echo $longText.'<br>';
echo nl2br($longText).'<br>';

// Multiline text and reserve html tags
$longText = "
  Hello, my name is <b>Zura</b>.
  I am <b>27</b>,
  I love my daughter.
";
echo $longText.'<br>';
echo nl2br($longText).'<br>';

echo htmlentities($longText).'<br>';
echo nl2br(htmlentities($longText)).'<br>';

echo html_entity_decode('&lt;b&gt;Zura&lt;/b&gt;').'<br>';


// https://www.php.net/manual/en/ref.strings.php
