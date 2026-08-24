import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard-shell">
      <aside className="dashboard-sidebar">
        <div className="dashboard-brand">
          <strong>EduVerse</strong>
          <span>ONE PLATFORM, FULL PACKAGE</span>
        </div>

        <nav className="dashboard-nav">
          <Link className="active" to="/dashboard">Overview</Link>
          <Link to="/dashboard">My Courses</Link>
          <Link to="/dashboard">Practice</Link>
          <Link to="/dashboard">Quizzes</Link>
          <Link to="/dashboard">Progress</Link>
          <Link to="/dashboard">AI Assistant</Link>
        </nav>

        <Link className="dashboard-home" to="/">
          ← Back to Home
        </Link>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-topbar">
          <div>
            <p className="dashboard-label">STUDENT DASHBOARD</p>
            <h1>Welcome to EduVerse 👋</h1>
            <p>Continue learning and keep building your future.</p>
          </div>

          <div className="student-avatar">S</div>
        </header>

        <section className="dashboard-stats">
          <div className="stat-card">
            <span>Courses</span>
            <strong>0</strong>
            <small>Start learning</small>
          </div>

          <div className="stat-card">
            <span>Completed</span>
            <strong>0%</strong>
            <small>Your progress</small>
          </div>

          <div className="stat-card">
            <span>Quizzes</span>
            <strong>0</strong>
            <small>Take your first quiz</small>
          </div>

          <div className="stat-card">
            <span>Study Time</span>
            <strong>0h</strong>
            <small>This week</small>
          </div>
        </section>

        <section className="dashboard-section">
          <div className="section-heading">
            <div>
              <p className="dashboard-label">LEARNING</p>
              <h2>Start Learning</h2>
            </div>
          </div>

          <div className="course-grid">
            <article className="course-card">
              <div className="course-icon">🧬</div>
              <span>Biology</span>
              <h3>Explore Biology</h3>
              <p>Study concepts, practice questions and prepare for exams.</p>
              <button>Start Course →</button>
            </article>

            <article className="course-card">
              <div className="course-icon">⚗️</div>
              <span>Chemistry</span>
              <h3>Explore Chemistry</h3>
              <p>Learn chemistry through structured lessons and practice.</p>
              <button>Start Course →</button>
            </article>

            <article className="course-card">
              <div className="course-icon">⚡</div>
              <span>Physics</span>
              <h3>Explore Physics</h3>
              <p>Build understanding through concepts, examples and quizzes.</p>
              <button>Start Course →</button>
            </article>
          </div>
        </section>

        <section className="dashboard-bottom">
          <article className="practice-card">
            <div>
              <p className="dashboard-label">PRACTICE</p>
              <h2>Test Your Knowledge</h2>
              <p>
                Challenge yourself with quizzes and practice questions.
              </p>
            </div>

            <button>Start Practice →</button>
          </article>

          <article className="ai-card">
            <div className="ai-icon">🤖</div>
            <p className="dashboard-label">EDUVERSE AI</p>
            <h2>Your AI Study Assistant</h2>
            <p>
              Get explanations, study help and guidance while learning.
            </p>
            <button>Ask EduVerse AI →</button>
          </article>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;