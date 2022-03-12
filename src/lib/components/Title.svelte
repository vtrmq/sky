<script>
  export let align = "left";
</script>

<h3 class="title-reg" style="text-align: {align};">
  <slot />
</h3>

<style>
  .title-reg {
    font-size: 1.5rem;
    color: var(--c-text-title);
  }
  @media (min-width: 720px) {
    .title-reg {
      font-size: 2rem;
    }
  }
</style>
