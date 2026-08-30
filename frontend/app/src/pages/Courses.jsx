import { Link } from "react-router-dom";

const courses = [
  {
    id: "biology",
    icon: "🧬",
    subject: "Biology",
    title: "Biology",
    description:
      "Explore living organisms, cells, genetics, ecology and human biology.",
    topics: ["Cells", "Genetics", "Ecology", "Human Biology"],
  },
  {
    id: "chemistry",
    icon: "⚗️",
    subject: "Chemistry",
    title: "Chemistry",
    description:
      "Understand matter, reactions, bonding, acids, bases and organic chemistry.",
    topics: ["Atoms", "Bonding", "Reactions", "Organic Chemistry"],
  },
  {
    id: "physics",
    icon: "⚡",
    subject: "Physics",
    title: "Physics",
    description:
      "Build your understanding of forces, energy, waves, electricity and matter.",
    topics: ["Mechanics", "Energy", "Waves", "Electricity"],
  },
  {
    id: "mathematics",
    icon: "📐",
    subject: "Mathematics",
    title: "Mathematics",
    description:
      "Develop mathematical thinking through algebra, geometry, functions and statistics.",
    topics: ["Algebra", "Geometry", "Functions", "Statistics"],
  },
];

function Courses() {
  return (
    <main className="courses-page">
      <header className="courses-header">
        <div>
          <p className="dashboard-label">EDUVERSE LEARNING</p>
          <h1>My Courses</h1>
          <p>Choose a subject and start learning.</p>
        </div>

        <Link to="/dashboard" className="course-back">
          ← Dashboard
        </Link>
      </header>

      <section className="courses-grid">
        {courses.map((course) => (
          <article className="full-course-card" key={course.id}>
            <div className="full-course-icon">{course.icon}</div>

            <p className="course-subject">{course.subject}</p>

            <h2>{course.title}</h2>

            <p className="course-description">{course.description}</p>

            <div className="topic-list">
              {course.topics.map((topic) => (
                <span key={topic}>{topic}</span>
              ))}
            </div>

            <Link
              to={`/courses/${course.id}`}
              className="course-start-button"
            >
              Open Course →
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Courses;