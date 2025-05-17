import React, { useState } from "react";

function Project() {
  const imagePaths = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image5.jpg",
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (img) => {
    setCurrentImage(img);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentImage(null);
  };

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }
        body, html, #root {
          margin: 0;
          padding: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: #f9fafb;
          color: #374151;
          min-height: 100vh;
        }
        .project-container {
          max-width: 800px;
          margin: 50px auto 80px;
          padding: 0 25px 40px;
          background: white;
          border-radius: 14px;
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);
        }
        .project-main-title {
          font-size: 3rem;
          font-weight: 900;
          color: #6d28d9; /* purple-700 */
          text-align: center;
          margin-bottom: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          user-select: none;
          text-shadow: 1px 1px 3px rgba(109, 40, 217, 0.4);
        }
        .project-subtitle {
          font-size: 1.8rem;
          font-weight: 700;
          color: #4c1d95; /* purple-900 */
          margin-top: 50px;
          margin-bottom: 16px;
          border-bottom: 3px solid #7c3aed; /* purple-600 */
          padding-bottom: 6px;
          user-select: none;
        }
        .project-paragraph {
          font-size: 1.1rem;
          line-height: 1.7;
          margin-bottom: 30px;
          color: #374151;
        }
        .project-list {
          list-style: inside disc;
          font-size: 1.1rem;
          color: #4b5563;
          margin-bottom: 35px;
        }
        .project-list li {
          margin-bottom: 10px;
          padding-left: 8px;
        }
        .image-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 28px;
          margin: 40px 0 60px;
        }
        .image-card {
          border-radius: 12px;
          background-color: #fafafa;
          box-shadow: 0 8px 24px rgb(109 40 217 / 0.15);
          cursor: pointer;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 2px solid transparent;
        }
        .image-card:hover, .image-card:focus {
          transform: translateY(-6px);
          box-shadow: 0 14px 38px rgb(109 40 217 / 0.4);
          border-color: #7c3aed;
          outline: none;
        }
        .image-card img {
          width: 100%;
          height: 160px;
          object-fit: cover;
          display: block;
          border-bottom: 2px solid #ddd;
          transition: filter 0.3s ease;
        }
        .image-card:hover img {
          filter: brightness(0.95);
        }
        .image-caption {
          padding: 14px 12px;
          font-weight: 600;
          font-size: 1rem;
          color: #5b21b6;
          text-align: center;
          user-select: none;
        }

        /* Modal styles */
        .modal-overlay {
          position: fixed;
          top: 0; left: 0;
          width: 100vw; 
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 0;
          overflow: hidden; /* prevent scroll */
        }
        .modal-content {
          position: relative;
          width: 100%;
          height: 100%;
          max-width: 100vw;
          max-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: transparent;
          border-radius: 0;
          overflow: hidden;
          box-shadow: none;
        }
        .modal-content img {
          max-width: 100vw;
          max-height: 100vh;
          width: auto;
          height: auto;
          object-fit: contain;
          user-select: none;
          pointer-events: none;
          display: block;
        }
        .modal-close {
          position: absolute;
          top: 12px;
          right: 16px;
          background: #7c3aed;
          border: none;
          color: white;
          font-size: 28px;
          padding: 6px 14px;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.3s ease;
          user-select: none;
          box-shadow: 0 4px 15px rgba(124, 58, 237, 0.6);
          z-index: 11;
        }
        .modal-close:hover {
          background: #5b21b6;
        }

        @media (max-width: 600px) {
          .project-main-title {
            font-size: 2.3rem;
          }
          .project-subtitle {
            font-size: 1.4rem;
            margin-top: 40px;
          }
          .project-paragraph, .project-list {
            font-size: 1rem;
          }
          .image-card img {
            height: 140px;
          }
        }
      `}</style>

      <div className="project-container">
        <h1 className="project-main-title">SKIN DETECT</h1>

        <p className="project-paragraph">
          Skin cancer is one of the most common types of cancer worldwide. Early detection is crucial for successful treatment and improved survival rates.{" "}
          <strong>SKIN DETECT</strong> is a web-based application that leverages advanced deep learning techniques to assist users in identifying suspicious skin lesions quickly and accurately. By uploading an image of a skin lesion, users receive a detailed analysis that classifies the lesion as benign or malignant, alongside a visual highlight of the affected area to aid medical understanding.
        </p>

        <h3 className="project-subtitle">Key Features</h3>
        <ul className="project-list">
          <li>User-friendly web interface for uploading skin lesion images from any device.</li>
          <li>State-of-the-art RegNet deep learning model for precise lesion classification.</li>
          <li>Advanced image segmentation to highlight the lesion boundary clearly.</li>
          <li>Quick and reliable results helping in early diagnosis and timely medical attention.</li>
          <li>Accessible solution especially valuable for remote and underserved regions.</li>
        </ul>

        <div className="image-grid">
          {imagePaths.map((path, index) => (
            <div
              key={index}
              className="image-card"
              onClick={() => openModal(path)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") openModal(path);
              }}
              aria-label={`View Image ${index + 1} fullscreen`}
            >
              <img src={path} alt={`Image ${index + 1}`} />
              <div className="image-caption">Image {index + 1}</div>
            </div>
          ))}
        </div>

        <h3 className="project-subtitle">Technical Architecture</h3>
        <p className="project-paragraph">
          The project employs a modern and scalable technology stack:
        </p>
        <ul className="project-list">
          <li><strong>Frontend:</strong> React.js with responsive design for a seamless user experience.</li>
          <li><strong>Backend:</strong> Flask REST API to handle image processing and communication.</li>
          <li><strong>AI Model:</strong> RegNet, a cutting-edge deep learning architecture for accurate classification and segmentation of skin lesions.</li>
          <li><strong>Deployment:</strong> Cloud-hosted solution using platforms such as Heroku, AWS, or PythonAnywhere for high availability.</li>
        </ul>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="modal-overlay"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label="Fullscreen image view"
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            tabIndex={-1}
          >
            <button
              className="modal-close"
              onClick={closeModal}
              aria-label="Close fullscreen image"
            >
              &times;
            </button>
            <img src={currentImage} alt="Enlarged view" />
          </div>
        </div>
      )}
    </>
  );
}

export default Project;
