<script>
  function a(cb) {
    setTimeout(() => {
      console.log('a');
      cb();
    }, 1000);
  }
  function b(cb) {
    setTimeout(() => {
      console.log('b');
      cb();
    }, 1000);
  }
  function c(cb) {
    setTimeout(() => {
      console.log('c');
      cb();
    }, 1000);
  }
  function d(cb) {
    setTimeout(() => {
      console.log('d');
      cb();
    }, 1000);
  }

  a(() => {
    b(() => {
      c(() => {
        d(() => {
          console.log('Done!');
        });
      });
    });
  });
</script>
