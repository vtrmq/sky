<p class="p">
  <slot />
</p>

<style>
  .p {
    font-size: 0.85rem;
    color: var(--c-text-gris);
    margin: 0.5rem 0 1rem;
    line-height: 1.6;
  }
  @media (min-width: 720px) {
    .p {
      font-size: 0.8rem;
    }
  }
</style>
