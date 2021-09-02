<script>
  import { time, elapsed } from './store.js';

  const formatter = new Intl.DateTimeFormat('en', {
    hour12: true,
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit'
  });
</script>

<main>
  <h1>The time is {formatter.format($time)}</h1>

  <p>
    This page has been open for
    {$elapsed} {$elapsed <= 1 ? 'second' : 'seconds'}
  </p>
</main>

<style>
  main {
    text-align: center;
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
