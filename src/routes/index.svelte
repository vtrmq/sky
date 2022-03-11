<script>
  async function end_point() {
    const resp = await fetch("/api/endpoint");
    const req = await resp.json();
    console.log(req);
  }
  async function request_data() {
    const res = await fetch("/api/request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: 2 }),
    });
    const data = await res.json();
    console.log(data);
  }
</script>

<div>
  <p>Pruebas de endpoint</p>
  <button on:click={end_point}>EndPoint</button>
  <hr />
  <button on:click={request_data}>Data</button>
</div>
