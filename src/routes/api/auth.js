export async function get(request) {
  const user = request.locals.user;
  return {
    status: 200,
    body: {
      isLogged: user === null || user === undefined ? {is_logged: false} : {is_logged:true, host: user.type}
    }
  }
}
