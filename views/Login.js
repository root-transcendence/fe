import { Auth } from '../Auth.js';

export const LoginView = () => {
    const div = document.createElement('div');
    div.innerHTML = `
        <h1>Login</h1>
        <form id="login-form">
            <input type="text" id="username" placeholder="Username" required />
            <input type="password" id="password" placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
    `;
    div.querySelector('#login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const username = e.target.querySelector('#username').value;
        const password = e.target.querySelector('#password').value;

        if (Auth.login(username, password)) {
            window.location.hash = '/profile';
        } else {
            alert('Invalid credentials');
        }
    });

    return div;
};
