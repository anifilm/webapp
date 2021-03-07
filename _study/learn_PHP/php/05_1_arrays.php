<?php

// Create array
$fruits = ["Banana", "Apple", "Orange"];

// Print the whole array
echo '<pre>';
var_dump($fruits); // print_r
echo '</pre>';

// Get element by index
echo $fruits[1].'<br>'; // "Apple"

// Set element by index
$fruits[0] = "Peach";

// Check if array has element at index 2
echo '<pre>';
var_dump(isset($fruits[2])); // true
echo '</pre>';

// Append element
$fruits[] = 'Banana'; // 배열에 요소 추가

echo '<pre>';
var_dump($fruits);
echo '</pre>';

// Print the length of the array
echo count($fruits).'<br>'; // 4

// Add element at the end of the array
array_push($fruits, 'Lemon'); // 맨 뒤에 요소 추가
echo $fruits[4].'<br>';

// Remove element from the end of the array
array_pop($fruits); // 맨 뒤의 요소 삭제

echo '<pre>';
var_dump($fruits);
echo '</pre>';

// Add element at the beginning of the array
array_unshift($fruits, 'Mango'); // 맨 앞에 요소 추가

// Remove element from the beginning of the array
array_shift($fruits); // 맨 앞의 요소 삭제

// Split the string into an array
$string = "Banana,apple,Peach";
echo '<pre>';
var_dump(explode(',', $string)); // 문자열을 ','를 기준으로 나눈 후 배열 생성
echo '</pre>';

// Combine array elements into string
echo implode(',', $fruits).'<br>'; // 배열 요소를 ','로 구분하여 문자열 반환

// Check if element exist in the array
echo '<pre>';
var_dump(in_array('Apple', $fruits)); // 배열에서 해당 요소가 있는지 검사
echo '</pre>';

// Search element index in the array
echo '<pre>';
var_dump(array_search('Peach', $fruits)); // 배열에서 해당 요소의 인덱스를 반환
echo '</pre>';

// Merge two arrays
$vegetables = ['Potato', 'Cucumber'];
echo '<pre>';
var_dump(array_merge($fruits, $vegetables)); // 두 배열을 합치기
var_dump([...$fruits, ...$vegetables]); // 구조 분해 문법을 통한 배열 합치기 (PHP 7.4이상)
echo '</pre>';

// Sorting of array (Reverse order also)
sort($fruits); // 배열 정렬 (sort, rsort)
echo '<pre>';
var_dump($fruits);
echo '</pre>';


// https://www.php.net/manual/en/ref.array.php
