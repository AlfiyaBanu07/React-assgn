import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <header className="header">
        <h2>Welcome to the CSE Department Portal</h2>
        <div className="auth-buttons">
          <Link to="/login">
            <button className="auth-btn login-btn">Login</button>
          </Link>
          <Link to="/register">
            <button className="auth-btn register-btn">Register</button>
          </Link>
        </div>
      </header>

      <section className="about-section">
        <h3>About the College</h3>
        <h3>Shri Madhwa Vadiraja Institute of Technology and Management</h3>
        <p>
          Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM) in Bantakal, Udupi District, Karnataka, is a well-regarded engineering and management institute. It offers Bachelor of Engineering (B.E.) programs, including Artificial Intelligence and Data Science, Civil Engineering, and more, and is affiliated with Visvesvaraya Technological University (VTU). SMVITM is also approved by the All India Council for Technical Education (AICTE).
        </p>
      </section>

      <section className="department-section">
        <h3>Department Highlights</h3>
        <p>Today, most activities in the real world—from simple calculations to space exploration—are done using computers because they make work faster and more accurate. This has led to a high demand for skilled professionals in computer engineering. To meet this need, the Computer Science and Engineering Department helps students build strong knowledge in both theory and practical skills. Students learn about programming, data, networks, AI, cybersecurity, and more. The department provides modern labs, helpful teachers, and chances to work on real projects. It also supports students through events like workshops and coding competitions. Graduates from this department are well-prepared to work in top tech companies or continue their studies.</p>
        <ul>
          <li>Experienced faculty with industry and academic expertise</li>
          <li>State-of-the-art computer labs and research facilities</li>
          <li>Active student clubs and hackathons</li>
          <li>Placement support with top tech companies</li>
        </ul>
      </section>

      <section className="course-overview-section">
        <h3>React JS Course Overview</h3>
        <p>
          The React Lab course (BCSL657B) offered in the 6th semester under the VTU 2022 scheme is a practical-based subject with 2 hours of lab work per week and 1 credit. It focuses on building dynamic web applications using React by teaching students how to use components, props, state management with hooks like useState, lifecycle methods, and event handling. Students learn to develop interactive interfaces, manage data flow between parent and child components, and apply styling and navigation using tools like React Router. The lab includes exercises such as creating counters, form validation, and fetching data from APIs, helping students gain hands-on experience in front-end development. The evaluation is based on 50 marks for internal assessment and 50 marks for the final exam. By the end of the course, students are expected to confidently build responsive and functional React applications.
        </p>
        <ul>
          <li>Introduction to components, props, and state</li>
          <li>Routing with React Router</li>
          <li>Hooks and lifecycle methods</li>
          <li>Hands-on projects and major project integration</li>
          <li>Integration with backend APIs</li>
        </ul>
        <p>
          Students gain practical experience by building real-world applications — like this portal — as part of their coursework.
        </p>
      </section>
    </div>
  );
}

export default Home;
