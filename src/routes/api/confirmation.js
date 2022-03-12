import { postJson } from "$lib/core";

export async function post({ request, url}) {
  const data = await request.json();
  data.domain = url.hostname;
  const reqs = await postJson("api/confirmation/", data);

  return {
    status: 200,
    body: {
      reqs
    }
  };
}
