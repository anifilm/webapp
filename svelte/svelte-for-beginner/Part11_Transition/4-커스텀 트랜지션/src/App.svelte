<script>
  import { fade } from 'svelte/transition';
  import { elasticOut } from 'svelte/easing';

  let visible = true;

  function spin(node, { duration }) {
    return {
      duration,
      css(t) {
        const eased = elasticOut(t);

        return `
          transform: scale(${eased}) rotate(${eased * 1080}deg);
          color: hsl(
            ${~~(t * 360)},
            ${Math.min(100, 1000 - 1000 * t)}%,
            ${Math.min(50, 500 - 500 * t)}%
          );
        `;
      }
    };
  }
</script>

<main>
  <label>
    <input type="checkbox" bind:checked={visible} />
    visible
  </label>

  {#if visible}
    <div class="centered" in:spin={{ duration: 8000 }} out:fade>
      <span>transitions!</span>
    </div>
  {/if}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
  .centered {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  span {
    position: absolute;
    transform: translate(-50%, -50%);
    font-size: 4em;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
