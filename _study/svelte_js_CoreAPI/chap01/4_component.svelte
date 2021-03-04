<script>
  let fruits = ['Apple', 'Banana', 'Cherry', 'Orange', 'Mango']
</script>

<h2>Fruits</h2>
<ul>
  {#each fruits as fruit}
    <li>{fruit}</li>
  {/each}
</ul>

<h2>Fruits reverse</h2>
<ul>
<!-- {#each fruits.reverse() as fruit} --> <!-- 원본이 수정된다. -->
  {#each [...fruits].reverse() as fruit} <!-- 원본이 수정되지 않도록 배열을 새로 할당하는 것이 좋다. -->
    <li>{fruit}</li>
  {/each}
</ul>

<h2>Fruits slice -2</h2>
<ul>
  {#each fruits.slice(-2) as fruit} <!-- 맨 뒤에 있는 두개의 요소를 슬라이스 하여 출력 -->
    <li>{fruit}</li>
  {/each}
</ul>

