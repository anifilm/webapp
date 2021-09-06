<script>
  import { fade, blur, fly, slide, scale, draw } from 'svelte/transition';

  let condition = false;
</script>

<main>
  <label>
    <input type="checkbox" bind:checked={condition} />
    효과 보기
  </label>

  {#if condition}
    <div transition:blur={{ delay: 200, duration: 300, opacity: 1, amount: 5 }}>
      transiton 예제
    </div>
  {/if}
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
