import { storeToken } from "$lib/store/token";
import { get } from "svelte/store";

export const handle = async ({ event, resolve }) => {
  event.locals.user = get(storeToken);
  return await resolve(event);
};

export async function getSession(request) {
  return {
    isLogged: request.locals.user === null ? false : true
  }
}

