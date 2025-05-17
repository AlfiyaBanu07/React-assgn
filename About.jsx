function About() {
  return (
    <>
      <style>{`
        .about-container {
          max-width: 720px;
          margin: 40px auto;
          padding: 24px 30px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #2c3e50;
          background: #fefefe;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
          border-radius: 12px;
          line-height: 1.7;
          font-size: 1.1rem;
        }

        .about-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 24px;
          color: #1e40af;
          border-bottom: 3px solid #3b82f6;
          padding-bottom: 8px;
        }

        .about-paragraph {
          margin-bottom: 20px;
          color: #34495e;
          letter-spacing: 0.02em;
        }

        .about-list {
          margin-left: 1.3rem;
          margin-bottom: 20px;
          color: #4b5563;
          list-style-type: disc;
        }

        .about-list li {
          margin-bottom: 12px;
          font-size: 1.05rem;
        }

        @media (max-width: 640px) {
          .about-container {
            padding: 20px 15px;
            font-size: 1rem;
          }
          .about-title {
            font-size: 1.6rem;
          }
        }
      `}</style>

      <div className="about-container">
        <h2 className="about-title">About Our Project</h2>
        <p className="about-paragraph">
          Our project is a web-based application designed to assist in the early detection of skin cancer using Artificial Intelligence (AI). Skin cancer is one of the most common and potentially deadly forms of cancer, but early detection greatly increases the chances of successful treatment. Unfortunately, many individuals lack timely access to dermatologists or diagnostic resources, leading to delayed diagnoses.
        </p>
        <p className="about-paragraph">
          To address this, we developed an AI-powered system that allows users to upload images of skin lesions for instant analysis. The AI model, trained on a large dataset of dermatological images, performs two key tasks:
        </p>
        <ul className="about-list">
          <li>Classification – determining whether a lesion is benign or potentially cancerous.</li>
          <li>Segmentation – visually identifying and outlining the specific area of concern on the skin.</li>
        </ul>
        <p className="about-paragraph">
          This tool offers a fast, cost-effective, and user-friendly alternative to traditional diagnosis. It empowers users to monitor their skin health regularly, raises awareness about early signs of skin cancer, and supports healthcare professionals in preliminary screenings.
        </p>
        <p className="about-paragraph">
          Our goal is to bridge the gap between early detection and medical consultation, especially in remote or underserved communities, using the power of AI and accessible web technologies.
        </p>
      </div>
    </>
  );
}

export default About;
