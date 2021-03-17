<script>
  import '../node_modules/materialize-css/dist/css/materialize.min.css';
  // 빌드 전에 아래 항목을 주석처리 하면 더 작은 사이즈의 빌드 결과물이 생긴다.
  import '../node_modules/materialize-css/dist/js/materialize.min.js';

  import { Router, Route } from "svelte-routing";

  import Navbar from './layout/Navbar.svelte';
  import Home from './pages/Home.svelte';
  import About from './pages/About.svelte';
</script>

<style>

</style>

<Router>
  <Navbar />
  <div class="container">
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
  </div>
</Router>
