<?php

$age = 20;
$salary = 300000;

// Sample if
if ($age === 20) {
  echo '1'.'<br>';
}

// Without circle braces
if ($age === 20) echo '1'.'<br>';

// Sample if-else
if ($age > 20) {
  echo '1'.'<br>';
} else {
  echo '2'.'<br>';
}

// Difference between == and ===
echo $age == 20;    // true
echo $age == '20';  // true

echo $age === 20;   // true
echo $age === '20'; // false

echo '<br>';

// if and (&&) 둘 다 사용 가능
if ($age > 20 and $salary === 300000) {
  echo 'AND'.'<br>';
}

// if of (||) 둘 다 사용 가능
if ($age > 20 or $salary === 300000) {
  echo 'OR'.'<br>';
}

// 기타 조건 연산자 1 if ($a xor $b)
// 기타 조건 연산자 2 if (!$a) (not)

// Ternary if (삼항 조건 연산)
echo $age < 22 ? 'Young' : 'Old'; // "Young"
echo '<br>';

// Short ternary
$myAge = $age ?: 18; // "$age ? $age : 18"와 동일
echo $myAge.'<br>';  // 20

// Null coalescing operator
$var = isset($name) ? $name : 'John';
$var = $name ?? 'John'; // 위와 동일
echo $var.'<br>';

// switch
$userRole = 'admin'; // admin, editor, user

switch ($userRole) {
  case 'admin':
    echo 'You can do anything<br>';
    break;
  case 'editor':
    echo 'You can edit content<br>';
    break;
  case 'user':
    echo 'You can view posts and comment<br>';
    break;
  default:
    echo 'Unknown rolw<br>';
}
