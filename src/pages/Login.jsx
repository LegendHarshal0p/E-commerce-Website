function Login() {
  return (
    <div className="login-page">

      <h1>Login To GameStop</h1>

      <form className="login-form">

        <input
          type="email"
          placeholder="Email Address"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <button>
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;