const hostname = "https://core.sveltejs.co";
//const headers = {'Content-Type': 'application/json'};

export async function post({request}) {
  const data = await request.json();
  const result = await fetch(`${hostname}/api/teacher/_aux/`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return {
    body: {
      resp: await result.json()
    }
  }
}
