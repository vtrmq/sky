<script>
  import { goto } from "$app/navigation";
  import { user } from "$lib/store/user";
  async function handleLogout() {
    await fetch("../api/logout");
    user.remove();
    goto("/");
  }
</script>

<div>
  <h1>Teacher</h1>
  <button on:click={handleLogout}>Logout</button>
</div>
