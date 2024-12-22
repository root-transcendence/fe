import { Auth } from '../Auth.js';
import TemplateLogin from '../templates/TemplateLogin.js';

export const LoginView = () => {
    const div = document.createElement('div');
    div.innerHTML = TemplateLogin();
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
