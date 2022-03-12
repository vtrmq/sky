<script>
  import { page } from "$app/stores";
  import { storeNav } from "$lib/store/nav";
  export let logged = {};
</script>

<nav class={$storeNav ? "left-0" : "left-nav"}>
  <div class="nav" id="nav-option">
    <div class="nav-link">
      <a
        class="item {$page.url.pathname === '/' ? 'active' : 'no-active'}"
        href="/">Inicio</a
      >
    </div>
    <div class="nav-link">
      <a
        class="item {$page.url.pathname === '/blog' ? 'active' : 'no-active'}"
        href="/blog">Blog</a
      >
    </div>
    <div class="nav-link">
      <a
        class="item {$page.url.pathname === '/about' ? 'active' : 'no-active'}"
        href="/about">Nosotros</a
      >
    </div>
    <div class="nav-link">
      <a
        class="item {$page.url.pathname === '/signup' ? 'active' : 'no-active'}"
        href="/signup">Regístrate</a
      >
    </div>
    <div class="nav-link">
      <a
        class="item {$page.url.pathname === '/login' ? 'active' : 'no-active'}"
        href="/{logged.host ? logged.host : 'login'}"
        >{logged.is_logged ? "Entrar" : "Iniciar sesión"}</a
      >
    </div>
  </div>
</nav>

<style>
  .nav {
    /*background: brown;*/
    height: 100%;
  }
  .active {
    border-bottom: 2px solid var(--c-brand);
  }
  .no-active {
    border-bottom: 2px solid transparent;
  }
  .left-nav {
    left: -16.4rem;
  }
  .left-0 {
    left: 0;
  }
  nav {
    /*display: none;*/
    background: aliceblue;
    position: fixed;
    top: var(--header-height);
    width: 16.4rem;
    bottom: 0;
    transition: left 0.3s;
    background-color: var(--c-bg);
    /*padding: 20px;*/
    border-right: 1px solid var(--c-divider);
  }
  .nav-link {
    padding: 20px;
  }
  .item {
    display: block;
    font-size: 1.1rem;
    font-weight: 400;
    color: var(--c-text);
    white-space: nowrap;
    text-decoration: none;
    padding-bottom: 4px;
  }
  @media (min-width: 720px) {
    .nav {
      display: flex;
      align-items: center;
      background: #ffffff00;
    }
    nav {
      margin-right: 10px;
      display: flex;
      align-items: center;
      margin-top: 4px;
      position: initial;
      top: initial;
      width: auto;
      bottom: auto;
      background-color: transparent;
      padding: 0;
      border-right: 0;
    }
    .item {
      font-size: 0.8rem;
    }
    .item:hover {
      transition: all 0.3s;
      border-bottom: 2px solid var(--c-brand);
    }
    .nav-link {
      padding: 0 0 0 1rem;
      margin: 0;
    }
  }
</style>
