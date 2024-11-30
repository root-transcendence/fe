// router.js
export class Router {
  constructor(routes) {
      this.routes = routes;
      this.loadRoute();
      window.addEventListener('hashchange', () => this.loadRoute());
  }

  loadRoute() {
      const hash = window.location.hash.slice(1) || '/';
      const route = this.routes[hash];
      if (route) {
          const app = document.getElementById('app');
          app.innerHTML = '';
          app.appendChild(route.view());
      } else {
          console.error('Route not found');
      }
  }
}
