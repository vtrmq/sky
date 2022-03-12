<script context="module">
  export const load = async ({ fetch }) => {
    const res = await fetch("/api/auth");
    const req = await res.json();
    console.log(req.isLogged);
    if (!req.isLogged.is_logged) {
      return {
        status: 302,
        redirect: "/",
      };
    }
    return {
      status: 200,
    };
  };
</script>

<slot />
