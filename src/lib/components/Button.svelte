<script>
  export let text = "Button";
  export let type = "submit";
  export let blue = false;
  export let green = false;
  export let orange = false;
  export let red = false;
  export let gray = false;
  export let enabled = false;
</script>

<input
  class="btn"
  class:blue
  class:green
  class:orange
  class:red
  class:gray
  {type}
  on:click
  value={text}
  disabled={enabled}
/>

<style>
  .btn {
    outline: none;
    border: 0;
    border-radius: 4px;
    padding: 1rem 2rem;
    font-size: 1rem;
    font-weight: 400;
    cursor: pointer;
    transition: background var(--time-transition);
  }
  .blue {
    background: #0e85e3;
    color: #fff;
  }
  .green {
    background: #00ad00;
    color: #fff;
  }
  .orange {
    background: #e69621;
    color: #fff;
  }
  .red {
    background: #df1010;
    color: #fff;
  }
  .gray {
    background: #e8e8e8;
    color: #333;
  }
  @media (min-width: 720px) {
    .btn {
      font-size: 0.8rem;
      padding: 0.8rem 2rem;
    }
    .blue:hover {
      background: #0673c9;
    }
    .green:hover {
      background: #009000;
    }
    .orange:hover {
      background: #d98202;
    }
    .red:hover {
      background: #c30707;
    }
    .gray:hover {
      background: #d3d3d3;
    }
  }
</style>
