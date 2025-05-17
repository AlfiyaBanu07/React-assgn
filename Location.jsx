import React from 'react';

function Location() {
  return (
    <>
      <style>{`
        .location-container {
          max-width: 700px;
          margin: 40px auto;
          padding: 20px;
          background: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #333;
          line-height: 1.6;
        }

        .location-container h2 {
          color: #0077cc;
          text-align: center;
          margin-bottom: 20px;
          font-weight: 700;
          font-size: 2rem;
        }

        .location-text {
          font-size: 1.1rem;
          text-align: center;
          white-space: pre-line; /* preserves line breaks */
        }
      `}</style>

      <div className="location-container">
        <h2>Our Location</h2>
        <p className="location-text">
          Shri Madhwa Vadiraja Institute of Technology and Management, Bantakal{'\n\n'}
          Location: Vishwothama Nagar, Bantakal, Karnataka 574115
        </p>
      </div>
    </>
  );
}

export default Location;
