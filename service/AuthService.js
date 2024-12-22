const AUTH_ENDPOINT = 'http://localhost:5030/auth';

export const AuthService = {
  login: async ( username, password ) => {
    try {
      const response = await fetch( `${AUTH_ENDPOINT}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( { username, password } ),
        credentials: "include"
      } );

      return response.status === 200;
    } catch {
      return false;
    }
  },

  isLoggedIn: async () => {
    try {
      const response = await fetch( `${AUTH_ENDPOINT}/ping`, {
        method: 'GET',
        credentials: "include"
      } );
      return response.status === 200;
    } catch {
      return false;
    }
  }
}