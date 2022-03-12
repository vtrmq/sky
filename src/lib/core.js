//const URL_PREFIX = 'http://localhost:3000/';
const URL_PREFIX = "https://core.sveltejs.co/";
const headers = {'Content-Type': 'application/json'};
/*
function getResponse(res) {
  const contentType = res.headers.get('Content-Type');
  console.log(contentType)
  //return contentType === 'application/json' ? res.json() : res.text();
  return res.json();
}
*/

export async function postJson(path, body) {
  const res = await fetch(URL_PREFIX + path, {
    method: 'POST',
    headers,
    body: JSON.stringify(body)
  });
  //if (!res.ok) throw new Error(await res.text());
  return await res.json();
}
