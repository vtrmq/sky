import { writable } from "svelte/store";
import { browser } from "$app/env";

const keyStorageUser = "user";
const keyStorageJorney = "journey";

function infoUser() {

  let user = browser ? JSON.parse(localStorage.getItem(keyStorageUser)) : null;
  const { subscribe, set, update } = user === null || user === undefined ? writable({}) : writable(user);

  return {
    subscribe,
    set: (info) => {
      if (browser) {
        localStorage.setItem(keyStorageUser ,JSON.stringify(info));
      }
      set(info);
    },
    photo: (p) => {
      update( data => {
        data.photo = p;
        localStorage.setItem(keyStorageUser, JSON.stringify(data));
        return data;
      })
    },
    update: (info) => {
      update((data) => {
        data.email = info.email;
        data.name = info.name;
        data.phone.indicative = info.phone.indicative;
        data.phone.number = info.phone.number;
        data.surnames = info.surnames;
        //data.user = info.user;
        localStorage.setItem(keyStorageUser, JSON.stringify(data));
        return data;
      })
    },
    remove: () => {
      localStorage.removeItem(keyStorageUser);
      set({});
    }
  }

}

function infoJourney() {
  let journey = browser ? JSON.parse(localStorage.getItem(keyStorageJorney)) : null;
  const { subscribe, set } = journey === null || journey === undefined ? writable(1) : writable(journey);
  
  return {
    subscribe,
    set: (info) => {
      if (browser) {
        localStorage.setItem(keyStorageJorney ,JSON.stringify(info));
      }
      set(info);
    },
  }
}

export const user = infoUser();
export const journey = infoJourney();

