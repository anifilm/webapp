<script>
  // Props
  export let fruits // commponent로 사용할 변수명 f -> fruits
  export let reverse
  export let slice

  let computedFruitsLabel = ''
  let computedFruits = []

  if (reverse) {
    computedFruitsLabel = 'reverse'
    computedFruits = [...fruits].reverse()
  } else {
    computedFruits = fruits
  }

  if (slice) {
    computedFruitsLabel = `slice(${slice})`
    // slice => '-2', '0, 3'
    // slice.split(',') => ['-2'], ['0', '3']
    // ['-2'] => '-2'
    // ['0', '3'] => '0', '3'
    computedFruits = fruits.slice(...slice.split(','))
  }
</script>

<h2>Fruits {computedFruitsLabel}</h2>
<ul>
  {#each computedFruits as fruit}
    <li>{fruit}</li>
  {/each}
</ul>
