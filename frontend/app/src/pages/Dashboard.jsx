import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <main className="dashboard-page">
      <header className="dashboard-header">
        <div>
          <p className="eyebrow">EDUVERSE</p>
          <h1>Student Dashboard</h1>
          <p>Your learning space.</p>
        </div>

        <Link to="/">Home</Link>
      </header>

      <section className="dashboard-grid">
        <article className="dashboard-card">
          <h2>📚 Learn</h2>
          <p>Explore courses and learning materials.</p>
        </article>

        <article className="dashboard-card">
          <h2>📝 Practice</h2>
          <p>Practice what you have learned.</p>
        </article>

        <article className="dashboard-card">
          <h2>📊 Progress</h2>
          <p>Track your learning progress.</p>
        </article>

        <article className="dashboard-card">
          <h2>🤖 AI Assistant</h2>
          <p>Get help while studying.</p>
        </article>
      </section>
    </main>
  );
}

export default Dashboard;