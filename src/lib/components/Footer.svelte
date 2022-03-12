<footer>
  <div class="container">
    <ul>
      <li>Copyright © 2022-SvelteJs</li>
      <li class="sep">|</li>
      <li>WhatsApp: (+57) 319-3126621</li>
      <li class="sep">|</li>
      <li>Bogotá (Colombia)</li>
    </ul>
  </div>
</footer>

<style>
  .sep {
    display: none;
  }
  footer {
    margin: 0 auto;
    max-width: 960px;
  }
  .container {
    padding: 2rem 1.5rem 2.25rem;
    border-top: 1px solid var(--c-divider);
    margin-top: 3rem;
    display: flex;
    justify-content: center;
  }
  ul {
    list-style: none;
  }
  ul li {
    font-size: 1rem;
    color: var(--c-text-light);
    padding: 3px 0;
    text-align: center;
  }
  @media (min-width: 420px) {
    .container {
      padding: 3rem 1.5rem 3.25rem;
    }
  }
  @media (min-width: 620px) {
    .sep {
      display: flex;
      padding: 0 10px;
      align-items: center;
    }
    ul {
      display: flex;
    }
    ul li {
      font-size: 0.8rem;
    }
  }
</style>
