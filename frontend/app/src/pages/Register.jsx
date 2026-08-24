import { Link } from "react-router-dom";

function Register() {
  return (
    <main className="auth-page">
      <div className="auth-card">
        <h1>Join EduVerse</h1>
        <p>Create your student account.</p>

        <form>
          <label>
            Full name
            <input type="text" placeholder="Enter your name" />
          </label>

          <label>
            Email address
            <input type="email" placeholder="Enter your email" />
          </label>

          <label>
            Password
            <input type="password" placeholder="Create a password" />
          </label>

          <button type="submit">Create Account</button>
        </form>

        <p>
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>

        <Link to="/">← Back to EduVerse</Link>
      </div>
    </main>
  );
}

export default Register;