<script>
	function a(callback) {
		setTimeout(() => {
			console.log('a');
			callback();
		}, 1000);
	}
	function b() {
		console.log('b');
	}

	a(() => {
		b();
	});
</script>
