import Home from './Home.svelte';
import Movie from './Movie.svelte';
import About from './About.svelte';

export default {
  '/': Home,
  '/movie/:id': Movie,
  '/about': About
};
