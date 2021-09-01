<script>
  import Router, { location } from 'svelte-spa-router';
  import { fade } from 'svelte/transition';
  import routes from '~/routes';
  import Header from '~/components/Header.svelte';
  import Footer from './components/Footer.svelte';

  import axios from 'axios';

  async function test() {
    const res = await axios.get('/.netlify/functions/test');
    console.log(res);
  }
  test();
</script>


<Header />
{#key $location}
  <div in:fade>
    <Router routes={routes} restoreScrollState={true} />
  </div>
{/key}
<Footer />
