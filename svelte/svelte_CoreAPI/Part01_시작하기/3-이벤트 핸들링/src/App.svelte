<script>
  //import { onMount } from 'svelte';

  let name = 'world';
  let box = 'box';
  let isRed = false;

  //onMount(() => {
  //	const box = document.querySelector('.box');
  //	box.addEventListener('click', () => {
  //		isRed = !isRed;
  //	});
  //});
  function enter() {
    box = 'enter';
  }
  function leave() {
    box = 'leave';
  }
</script>

<main>
  <h1>Hello {name}!</h1>
  <div
    class="box"
    style="background-color: {isRed ? 'red' : 'orange'}"
    on:click={() => {
      isRed = !isRed;
    }}
    on:mouseenter={enter}
    on:mouseleave={leave}
  >
    {box}!
  </div>
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
  .box {
    margin: 0 auto;
    width: 300px;
    height: 150px;
    background-color: orange;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
