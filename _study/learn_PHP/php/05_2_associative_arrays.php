<?php

// ============================================
// Associative arrays (연관 배열)
// ============================================

// Create an associative array
$person = [
  'name' => 'Brad',
  'surname' => 'Traversy',
  'age' => 30,
  'hobbies' => ['Tennis', 'Video Games'],
];

// Get element by key
echo $person['name'].'<br>'; // "Brad"

// Set element by key
$person['channel'] = 'TraversyMedia'; // 배열 요소 추가

// Null coalescing assignment operator. Since PHP 7.4
//if (!isset($person['address'])) {
//  $person['address'] = 'unknown'; // value값이 없는 key값 생성
//}
//$person['address'] = $person['address'] ?? 'unknown';
$person['address'] ??= 'unknown'; // value값이 없는 key값 생성 (PHP 7.4 이상)
echo $person['address'].'<br>'; // Unknown

// Check if array has specific key
echo '<pre>';
var_dump(isset($person['age']));
echo '</pre>';

// Print the keys of the array
echo '<pre>';
var_dump(array_keys($person)); // 배열의 key 요소를 출력
echo '</pre>';

// Print the values of the array
echo '<pre>';
var_dump(array_values($person)); // 배열의 value 요소를 출력
echo '</pre>';

// Sorting associative arrays by values, by keys
ksort($person); // ksort, krsort, asort, arsort
echo '<pre>';
var_dump($person);
echo '</pre>';

// Two dimensional arrays
$todos = [
  ['title' => 'Todo title 1', 'completed' => true],
  ['title' => 'Todo title 2', 'completed' => false],
];
echo '<pre>';
var_dump($todos);
echo '</pre>';
