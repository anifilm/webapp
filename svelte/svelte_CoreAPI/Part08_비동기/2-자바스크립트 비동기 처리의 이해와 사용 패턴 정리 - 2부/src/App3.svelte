<script>
  let isError = true;

  function a() {
    return new Promise((resolve, reject) => {
      if (isError) {
        reject('Sorry...');
        return;
      }
      setTimeout(() => {
        console.log('a');
        resolve();
      }, 1000);
    });
  }

  /*
  a()
    .then(() => {
      console.log('b');
    })
    .catch((err) => {
      console.log(err);
    });
  */
  async function asyncFn() {
    try {
      await a();
      console.log('b');
    } catch (err) {
      console.log(err);
    }
  }
  asyncFn();
</script>
