import { Link } from "react-router-dom";

function Login() {
  return (
    <main className="auth-page">
      <div className="auth-card">
        <h1>Welcome Back</h1>
        <p>Log in to continue your EduVerse journey.</p>

        <form>
          <label>
            Email address
            <input type="email" placeholder="Enter your email" />
          </label>

          <label>
            Password
            <input type="password" placeholder="Enter your password" />
          </label>

          <button type="submit">Login</button>
        </form>

        <p>
          Don't have an account?{" "}
          <Link to="/register">Create one</Link>
        </p>

        <Link to="/">← Back to EduVerse</Link>
      </div>
    </main>
  );
}

export default Login;