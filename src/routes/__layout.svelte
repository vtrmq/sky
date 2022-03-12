<script context="module">
  export const load = async ({ fetch }) => {
    const res = await fetch("/api/auth");
    const req = await res.json();
    console.log(req.isLogged);
    return {
      status: 200,
      props: {
        isLogged: req.isLogged,
      },
    };
  };
</script>

<script>
  import Logo from "$lib/components/Logo.svelte";
  import Header from "$lib/components/Header.svelte";
  import ButtonTheme from "$lib/components/ButtonTheme.svelte";
  import Search from "$lib/components/Search.svelte";
  import Menu from "$lib/components/Menu.svelte";

  export let isLogged = {};
  //console.log(isLogged);
</script>

<div>
  <Header>
    <Logo slot="logo" />
    <Menu slot="menu" logged={isLogged} />
    <ButtonTheme slot="theme" />
    <Search slot="search" />
  </Header>
  <main>
    <slot />
  </main>
</div>
