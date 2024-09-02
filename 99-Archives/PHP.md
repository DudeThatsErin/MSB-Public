What is the purpose of namespacing in PHP? ;; to insulate classes

# Loop Quiz

## Question 1 - `findLargest(array $numbers)`

Implement the function `findLargest(array $numbers)` so it returns the largest number from the $numbers integer array. Note: the array always contains **at least 1 number**. ?? Answer Code:

```php
<?php /* PHP 7 code below */?>

<?php
function findLargest(array $numbers) {
    // Your code goes here
}
?>
```

test code:

```php
echo findLargest(array(7, 17, 13, 19, 5)); // 19
```

## Question 2 - `computeClosestToZero(array $ts)`

Implement the function `computeClosestToZero(array $ts)` which takes an array of temperatures `$ts` and returns the temperature closest to 0.

#### Constraints:

- If the array is empty, the function should return 0.
- 0 < or = `$ts` < or = 10000
- If two temps are equally or close to zero, the positive temperature must be returned. For ex, if the input is -5 and 5, then 5 must be returned. ?? Answer Code:

```php
<?php
function computeClosestToZero(array $ts) {
  // Write your code here
  // To debug (equivalent to var_dump): error_log(var_export($var, true));
  return -1;
}

/* Ignore and do not change the code below */
fscanf(STDIN, "%d", $n);
$ts = array();
$inputs = explode(" ", fgets(STDIN));
for ($i = 0; $i < $n; $i++) {
    $ts[$i] = intval($inputs[$i]);
}
$oldStdout = fopen('php://stdout', 'wb');
eio_dup2(STDERR, STDOUT);
eio_event_loop();
$solution = computeClosestToZero($ts);
eio_dup2($oldStdout, STDOUT);
eio_event_loop();
echo "$solution
";
/* Ignore and do not change the code above */
?>
```

Tests cases: Simple: (should return 1)

```php
array (
  0 => 1,
  1 => -2,
  2 => -8,
  3 => 4,
  4 => 5,
)
```

No Temp: (should return 0)

```php
array (
)
0
```

Complex: (should return 2)

```php
c
```