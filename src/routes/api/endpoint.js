export async function get({ url }) {
  let { host, hostname, origin } = url;
  return {
    body: {
      host,
      hostname,
      origin
    }
  }
}
