<header class="nav-bar">
  <slot name="logo" />
  <div class="wrapper-options">
    <slot name="menu" />
    <slot name="theme" />
    <slot name="search" />
  </div>
</header>

<style>
  .wrapper-options {
    display: flex;
  }
  .nav-bar {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: var(--z-index-navbar);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--c-divider);
    padding: 0.7rem 1.5rem 0.7rem 0.7rem;
    height: var(--header-height);
    background-color: var(--c-bg);
  }
  @media (min-width: 720px) {
    .nav-bar {
      padding: 0.7rem 1.5rem;
    }
  }
</style>
