<script>
  import { onMount } from 'svelte';

  let photos = [];

  onMount(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?_limit=20`)
      .then(async (res) => {
        photos = await res.json();
        console.log('mounted');
      });

    return () => {
      console.log('destoryed');
    }
  });
</script>

{#each photos as photo (photo.id)}
  <figure>
    <img src={photo.thumbnailUrl} alt={photo.title}>
    <figcaption>{photo.title}</figcaption>
  </figure>
{:else}
  <p>로딩 중...</p>
{/each}
