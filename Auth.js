export const Auth = {
  isLoggedIn: false,
  login(username, password) {
      if (username === 'user' && password === 'pass') {
          this.isLoggedIn = true;
          localStorage.setItem('auth', true);
          return true;
      }
      return false;
  },
  logout() {
      this.isLoggedIn = false;
      localStorage.removeItem('auth');
  },
  checkAuth() {
      this.isLoggedIn = localStorage.getItem('auth') === 'true';
      return this.isLoggedIn;
  },
};
