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
    <div in:fade out:fly={{ y: 200 }}>
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
