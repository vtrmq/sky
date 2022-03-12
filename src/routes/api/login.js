import { storeToken } from "$lib/store/token";
import { postJson } from "$lib/core";

export async function post({ request, url}) {
  const data = await request.json();
  data.domain = url.hostname;
  const info = await postJson("api/login/", data);
  
  if (!info.is_logged) {
    return {
      status: 200,
      body: {
        isLogged: false
      }
    };
  }

  const tokenUser = {
    type: info.type,
    token: info.token,
    dbase: info.dbase
  }
  storeToken.set(tokenUser);
  
  return {
    status: 200,
    body: {
      type: info.type,
      user: info.user,
      isLogged: true,
    }
  };
}

