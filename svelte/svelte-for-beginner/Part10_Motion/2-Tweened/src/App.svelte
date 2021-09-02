<script>
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

  const progress = tweened(0, {
    delay: 100,
    duration: 300,
    easing: cubicOut
  });
</script>

<main>
  <progress value={$progress}></progress>

  <button on:click="{() => {progress.set(0)}}">0%</button>
  <button on:click="{() => {progress.set(0.25)}}">25%</button>
  <button on:click="{() => {progress.set(0.5)}}">50%</button>
  <button on:click="{() => {progress.set(0.75)}}">75%</button>
  <button on:click="{() => {progress.set(1)}}">100%</button>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
  progress {
    display: block;
    width: 100%;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
