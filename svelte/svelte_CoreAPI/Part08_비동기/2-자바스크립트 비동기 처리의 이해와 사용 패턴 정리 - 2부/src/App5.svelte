<script>
  let isError = false;

  function a() {
    return new Promise((resolve, reject) => {
      if (isError) {
        reject(new Error('Sorry...'));
        return;
      }
      setTimeout(() => {
        console.log('a');
        resolve('Heropy');
      }, 1000);
    });
  }

  /*
  a()
    .then((res) => {
      console.log(res);
      console.log('b');
    })
    .catch((err) => {
      console.log(err.message);
    });
    .finally(() => {
      console.log('Done!');
    })
  */
  async function asyncFn() {
    try {
      const res = await a();
      console.log(res);
      console.log('b');
    } catch (err) {
      console.log(err.message);
    } finally {
      console.log('Done!');
    }
  }
  asyncFn();
</script>
