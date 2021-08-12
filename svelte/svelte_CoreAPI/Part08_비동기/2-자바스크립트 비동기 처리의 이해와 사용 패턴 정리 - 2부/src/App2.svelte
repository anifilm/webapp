<script>
  let isError = true;

  function a() {
    return new Promise((resolve, reject) => {
      if (isError) {
        reject('Sorry...');
      }
      setTimeout(() => {
        console.log('a');
        resolve();
      }, 1000);
    });
  }

  a()
    .then(() => {
      console.log('b');
    })
    .catch((err) => {
      console.log(err);
    });
</script>
