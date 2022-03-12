import { writable } from "svelte/store";
function store_nav() {
  const { subscribe, set } = writable(false);
  return {
    subscribe,
    set: (sw) => {
      set(sw)
    },
  }
}
export const storeNav = store_nav();
