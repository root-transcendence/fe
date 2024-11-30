// profile.js
import { Auth } from '../Auth.js';

export const ProfileView = () => {
    if (!Auth.checkAuth()) {
        window.location.hash = '/login';
        return document.createElement('div');
    }

    const div = document.createElement('div');
    div.innerHTML = `
        <h1>Profile</h1>
        <button id="logout">Logout</button>
    `;
    div.querySelector('#logout').addEventListener('click', () => {
        Auth.logout();
        window.location.hash = '/login';
    });

    return div;
};
