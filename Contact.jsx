import React from 'react';

function Contact() {
  const contacts = [
    { email: 'alfiya.22cs017@sode-edu.in', phone: '917836012921' },
    { email: 'apoorva.22cs029@sode-edu.in', phone: '919493921945' },
    { email: 'ashmitha.22cs032@sode-edu.in', phone: '918463901453' },
    { email: 'gagan.22cs056@sode-edu.in', phone: '917452610842' },
  ];

  return (
    <>
      <style>{`
        .contact-container {
          max-width: 700px;
          margin: 40px auto;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #333;
          padding: 20px;
          background: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        h2 {
          text-align: center;
          margin-bottom: 30px;
          color: #0077cc;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }

        .contact-card {
          background: white;
          padding: 15px 20px;
          border-radius: 6px;
          box-shadow: 0 1px 5px rgba(0,0,0,0.1);
          transition: box-shadow 0.3s ease;
        }

        .contact-card:hover {
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        .email {
          font-weight: 600;
          color: #0077cc;
          margin-bottom: 8px;
          word-break: break-word;
        }

        .phone {
          color: #555;
          font-size: 0.95em;
        }
      `}</style>

      <div className="contact-container">
        <h2>Contact Us</h2>
        <div className="contact-grid">
          {contacts.map(({ email, phone }) => (
            <div key={email} className="contact-card">
              <p className="email">{email}</p>
              <p className="phone">Phone: {phone}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Contact;
