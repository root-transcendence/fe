export const Nav = () => {
  const nav = document.createElement('nav');
  nav.innerHTML = `
      <a href="#/">Home</a>
      <a href="#/profile">Profile</a>
  `;
  return nav;
};
