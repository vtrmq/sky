<div>
  <button class="btn-search">
    <svg class="search-icon" viewBox="0 0 20 20">
      <path
        d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
        stroke="currentColor"
        fill="none"
      />
    </svg>
  </button>
</div>

<style>
  .btn-search {
    border: 0;
    outline: none;
    cursor: pointer;
    background-color: var(--searchbox-background);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 36px;
    width: 36px;
    margin: 0 0 0 16px;
    border-radius: 40px;
  }
  .search-icon {
    width: 20px;
    height: 20px;
    stroke-width: 1.9;
    color: var(--c-search-icon);
  }
</style>
