import { postJson } from "$lib/core";

export async function post({ request, url}) {
  const data = await request.json();
  data.domain = url.hostname;
  data.origin = url.origin;
  const req = await postJson("api/register/", data);
  return {
    status: 200,
    body: {
      req
    }
  };
}
