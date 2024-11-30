import { Router } from './Router.js';
import { HomeView } from './views/Home.js';
import { LoginView } from './views/Login.js';
import { ProfileView } from './views/Profile.js';

const routes = {
    '/': { view: HomeView },
    '/profile': { view: ProfileView },
    '/login': { view: LoginView },
};

new Router(routes);