<script>
  export let msg = "";
  export let sw = false;
  export let value = "";
</script>

<div>
  <select bind:value on:change>
    <slot />
  </select>
  {#if sw}
    <p class="msg">{msg}</p>
  {/if}
</div>

<style>
  .msg {
    font-size: 0.75rem;
    color: #ee3900;
    margin: 4px 10px;
  }
  select {
    padding: 14px 12px;
    width: 100%;
    outline: none;
    border: 0;
    border-bottom: 1px solid var(--c-line-input);
    /*background: var(--c-bg-select);*/
    background: var(--bg-box-b);
    font-size: 0.9rem;
    color: var(--c-white-dark);
    transition: border-bottom 0.3s;
  }
  select:focus {
    border-bottom: 1px solid var(--c-line-input-hover);
  }
  @media (min-width: 720px) {
    select {
      font-size: 0.8rem;
    }
  }
</style>
