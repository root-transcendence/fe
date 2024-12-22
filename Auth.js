import { AuthService } from "./service/AuthService.js";

export const Auth = {
  isLoggedIn: false,

  async checkAuth() {
    return this.isLoggedIn ? AuthService.isLoggedIn() : false;
  },

  login( username, password ) {
    this.isLoggedIn = AuthService.login( username, password );
    return this.isLoggedIn;
  }
};
