import { storeToken } from "$lib/store/token";

export function get() {
  storeToken.remove();
  return {
    status: 200
  }
}

