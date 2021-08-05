<script>
	let promise = '인사 대기중...';

  function sayHello() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('안녕, 세계!');
        //reject(new Error('에러 발생!'));
      }, 3000);
    });
  }

  function handleClick() {
    promise = sayHello();
  }
</script>

<main>
  {#await promise}
    <p>인사를 받아오는 중...</p>
  {:then data}
    <p>{data}</p>
  {:catch error}
    <p>{error.message}</p>
  {/await}

	<button on:click={handleClick}>인사하기</button>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
