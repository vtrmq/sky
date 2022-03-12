<script>
  export let placeholder = "";
  export let type = "text";
  export let value = "";
  export let msg = "";
  export let sw = false;
  export let lowercase = false;
  export let capitalize = false;
  export let uppercase = false;
  const setType = (node) => {
    node.type = type;
  };
</script>

<div>
  <input
    class="input"
    class:lowercase
    class:capitalize
    class:uppercase
    {placeholder}
    autocomplete="true"
    use:setType
    bind:value
    on:input
    spellcheck="false"
  />
  {#if sw}
    <p class="msg">{msg}</p>
  {/if}
</div>

<style>
  .uppercase {
    text-transform: uppercase;
  }
  .capitalize {
    text-transform: capitalize;
  }
  .lowercase {
    text-transform: lowercase;
  }
  input::-webkit-inner-spin-button,
  input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .msg {
    font-size: 0.75rem;
    color: #ee3900;
    margin: 4px var(--m-left);
  }
  .input {
    padding: 14px var(--m-left);
    width: 100%;
    outline: none;
    border: 0;
    border-bottom: 1px solid var(--c-line-input);
    background: transparent;
    font-size: 0.9rem;
    color: var(--c-white-dark);
    transition: border-bottom 0.3s;
  }
  .input:focus {
    border-bottom: 1px solid var(--c-line-input-hover);
  }
  @media (min-width: 720px) {
    .input {
      font-size: 0.8rem;
    }
  }
</style>
