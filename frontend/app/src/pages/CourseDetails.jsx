import { Link, useParams } from "react-router-dom";

const courseData = {
  biology: {
    icon: "🧬",
    title: "Biology",
    description:
      "Explore living organisms, cells, genetics, ecology and human biology.",
    lessons: [
      "Introduction to Biology",
      "Cell Structure and Function",
      "Cell Division",
      "Genetics and Heredity",
      "Ecology and Ecosystems",
    ],
  },

  chemistry: {
    icon: "⚗️",
    title: "Chemistry",
    description:
      "Understand matter, chemical reactions, bonding, acids and bases.",
    lessons: [
      "Introduction to Chemistry",
      "Atomic Structure",
      "Chemical Bonding",
      "Chemical Reactions",
      "Acids, Bases and Salts",
    ],
  },

  physics: {
    icon: "⚡",
    title: "Physics",
    description:
      "Build your understanding of forces, energy, waves and electricity.",
    lessons: [
      "Introduction to Physics",
      "Motion and Forces",
      "Work, Energy and Power",
      "Waves",
      "Electricity",
    ],
  },

  mathematics: {
    icon: "📐",
    title: "Mathematics",
    description:
      "Develop mathematical thinking through algebra, geometry and statistics.",
    lessons: [
      "Algebra Fundamentals",
      "Equations and Inequalities",
      "Geometry",
      "Functions",
      "Statistics",
    ],
  },
};

function CourseDetails() {
  const { courseId } = useParams();
  const course = courseData[courseId];

  if (!course) {
    return (
      <main className="course-details-page">
        <h1>Course Not Found</h1>
        <Link to="/courses">← Back to Courses</Link>
      </main>
    );
  }

  return (
    <main className="course-details-page">
      <Link to="/courses" className="course-back">
        ← Back to Courses
      </Link>

      <header className="course-details-header">
        <div className="course-details-icon">{course.icon}</div>

        <div>
          <p className="dashboard-label">EDUVERSE COURSE</p>
          <h1>{course.title}</h1>
          <p>{course.description}</p>
        </div>
      </header>

      <section className="lessons-section">
        <div>
          <p className="dashboard-label">COURSE CONTENT</p>
          <h2>Lessons</h2>
        </div>

        <div className="lessons-list">
          {course.lessons.map((lesson, index) => (
            <article className="lesson-card" key={lesson}>
              <div className="lesson-number">
                {index + 1}
              </div>

              <div className="lesson-info">
                <span>Lesson {index + 1}</span>
                <h3>{lesson}</h3>
              </div>

              <button className="lesson-button">
                Start →
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default CourseDetails;