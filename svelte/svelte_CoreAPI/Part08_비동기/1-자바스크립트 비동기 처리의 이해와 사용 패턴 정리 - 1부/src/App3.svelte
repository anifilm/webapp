<script>
  /*
  function a(cb) {
    setTimeout(() => {
      console.log('a');
      cb();
    }, 1000);
  } */
  function a() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('a');
        resolve();
      }, 1000);
    });
  }
  function b() {
    console.log('b');
  }

  a().then(() => {
    b();
  });
</script>
