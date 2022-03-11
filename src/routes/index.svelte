<script>
  async function end_point() {
    const resp = await fetch("/api/endpoint");
    const req = await resp.json();
    console.log(req);
  }
</script>

<div>
  <p>Pruebas de endpoint</p>
  <button on:click={end_point}>EndPoint</button>
</div>
