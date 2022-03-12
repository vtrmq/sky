import { writable } from "svelte/store";
import { browser } from "$app/env";

const token = "token";

function storeSession() {

  const session = browser ? localStorage.getItem(token) : null;
  const { subscribe, set } = session === null ? writable(null) : writable(session);

  return {
    subscribe,
    set: (tk) => {
      if (browser) localStorage.setItem(token, tk);
      set(tk);
    },
    remove: () => {
      if (browser) localStorage.removeItem(token);
      set(null);
    }
  }

}

export const storeToken = storeSession();

