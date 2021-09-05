<script>
  let count = 0;

  $: doubled = count * 2;
  $: if(count >= 10) {
    alert('카운트가 10을 넘었습니다.');
    count = 9;
  }
	$: {
		console.log('count: ' + count);
		console.log('doubled: ' + doubled);
	}

  function handleClick() {
    // 이벤트 코드
    count += 1;
  }
</script>

<main>
  <button on:click={handleClick}>
    클릭수 {count} {count === 1 ? 'time' : 'times'}
  </button>
  <p>{count} 두배는 {doubled}<p/>
</main>

<style>
  main {
    /*text-align: center;*/
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
