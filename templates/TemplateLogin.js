export default function TemplateLogin() {
  return `
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-4">
          <form id="login-form">
            <div class="form-group mt-5">
              <label for="username">Username</label>
              <input type="text" class="form-control" id="username" placeholder="Enter username" required autocomplete="current-username">
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" id="password" placeholder="Password" required autocomplete="current-password">
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    </div>
  `;
}