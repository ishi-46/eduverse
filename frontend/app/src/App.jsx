import {
  BookOpen,
  CircleHelp,
  ClipboardCheck,
  ArrowRight,
  GraduationCap,
} from "lucide-react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <div className="brand">
          <div className="brand-icon">
            <GraduationCap size={26} />
          </div>

          <div>
            <h2>EduVerse</h2>
            <span>ONE PLATFORM, FULL PACKAGE</span>
          </div>
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
        </nav>

        <button className="login-button">Login</button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="badge">
              <span></span>
              Learning made simpler
            </div>

            <h1>
              Learn.
              <br />
              Practice.
              <br />
              <strong>Improve.</strong>
            </h1>

            <p>
              EduVerse brings learning resources, questions, quizzes,
              challenges, and progress tracking together in one platform.
            </p>

            <div className="hero-actions">
              <button className="primary-button">
                Explore Learning
                <ArrowRight size={19} />
              </button>

              <button className="secondary-button">
                Get Started
              </button>
            </div>

            <p className="levels">
              Designed for General Education · P1 — S6
            </p>
          </div>

          <div className="hero-card">
            <div className="card-header">
              <span>EduVerse</span>
              <span className="status">● Ready to learn</span>
            </div>

            <div className="welcome">
              <p>WELCOME TO</p>
              <h2>One Platform.</h2>
              <h2>Full Package.</h2>
            </div>

            <div className="learning-grid">
              <div>
                <BookOpen size={25} />
                <strong>Learn</strong>
                <span>Resources</span>
              </div>

              <div>
                <CircleHelp size={25} />
                <strong>Practice</strong>
                <span>Questions</span>
              </div>

              <div>
                <ClipboardCheck size={25} />
                <strong>Test</strong>
                <span>Quizzes</span>
              </div>
            </div>
          </div>
        </section>

        <section className="features" id="features">
          <div className="section-heading">
            <span>WHY EDUVERSE</span>
            <h2>Everything students need to keep learning.</h2>
          </div>

          <div className="feature-grid">
            <article>
              <BookOpen size={30} />
              <h3>Learn</h3>
              <p>
                Access organized educational resources and learning
                materials.
              </p>
            </article>

            <article>
              <CircleHelp size={30} />
              <h3>Practice</h3>
              <p>
                Work through questions and exercises to strengthen
                understanding.
              </p>
            </article>

            <article>
              <ClipboardCheck size={30} />
              <h3>Test</h3>
              <p>
                Challenge yourself with quizzes and assessments and track
                your progress.
              </p>
            </article>
          </div>
        </section>
      </main>

      <footer>
        <strong>EduVerse</strong>
        <span>ONE PLATFORM, FULL PACKAGE</span>
      </footer>
    </div>
  );
}

export default App;