<script>
  let auth = {
    loggedIn: false
  };

  function handleLogin() {
    auth.loggedIn = true;
  };
  function handleLogout() {
    auth.loggedIn = false;
  };
</script>

<main>
  <button on:click={handleLogin}>Log In</button>
  <button on:click={handleLogout}>log Out</button>

  {#if auth.loggedIn}
    <p>로그인 중입니다.</p>
  {:else}
    <p>로그아웃 중입니다.</p>
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
