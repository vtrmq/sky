<script>
  import { get } from "svelte/store";
  import { storeNav } from "$lib/store/nav";

  let pivote = false;
  function handleClick(evt) {
    if (evt.target.id !== "nav-option") {
      document.removeEventListener("click", handleClick, true);
      storeNav.set(false);
      if (
        evt.target.id === "icon.svg" ||
        evt.target.id === "btn.icon.svg" ||
        evt.target.id === "path.svg"
      ) {
        pivote = true;
      } else {
        pivote = false;
      }
    }
  }
  function handleNav() {
    if (get(storeNav) === false && pivote === false) {
      storeNav.set(true);
      document.addEventListener("click", handleClick, true);
    } else if (get(storeNav) === false && pivote === true) {
      pivote = false;
    }
  }
</script>

<div class="container-logo">
  <div class="btn-nav sidebar-button" on:click={handleNav} id="btn.icon.svg">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      viewBox="0 0 448 512"
      id="icon.svg"
      class="icon"
    >
      <path
        id="path.svg"
        fill="currentColor"
        d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"
      />
    </svg>
  </div>
  <a class="nav-bar-title" href="/">
    <img class="logo" src="./images/logo.svg" alt="" />
  </a>
</div>

<style>
  .container-logo {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .btn-nav {
    border: 0;
    outline: none;
    background-color: #ffffff00;
    margin-right: 10px;
    width: 46px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    /*background-image: url("./icons-svg/nav.svg");
    background-repeat: no-repeat;
    background-size: cover;*/
  }
  .sidebar-button {
    /*position: absolute;*/
    top: 0.6rem;
    left: 1rem;
    display: none;
    /*padding: 0.6rem;*/
    cursor: pointer;
  }
  .icon {
    /*display: block;*/
    width: 1.25rem;
    height: 1.25rem;
    color: var(--c-text);
  }
  .nav-bar-title {
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--c-text);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
  .logo {
    height: 24px;
    margin-right: 0;
  }
  @media screen and (max-width: 719px) {
    .sidebar-button {
      display: flex;
    }
  }
</style>
