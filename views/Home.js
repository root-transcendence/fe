// home.js
export const HomeView = () => {
  const div = document.createElement('div');
  div.innerHTML = `
      <h1>Home</h1>
      <a href="#/profile">Go to Profile</a>
  `;
  return div;
};
