import React from "react";

function Team() {
  const members = [
    {
      usn: "4MW22CS017",
      name: "ALFIYA BANU MOHAMMED ARIF",
      role: "Backend Developer",
      img: "/images/team/alfi.jpg",
    },
    {
      usn: "4MW22CS056",
      name: "GAGAN SHERIGER",
      role: "Frontend Developer",
      img: "/images/team/gagn.jpg",
    },
    {
      usn: "4MW22CS029",
      name: "APOORVA BHATT B R",
      role: "UI/UX Designer",
      img: "/images/team/appu.jpg",
    },
    {
      usn: "4MW22CS032",
      name: "Ashmitha D Kotian",
      role: "AI Model Trainer",
      img: "/images/team/assu.jpg",
    },
  ];

  return (
    <>
      <style>{`
        .team-container {
          max-width: 900px;
          margin: 40px auto;
          padding: 0 15px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #333;
        }

        h2 {
          text-align: center;
          font-size: 2.2rem;
          margin-bottom: 40px;
          color: #0077cc;
          font-weight: 700;
        }

        .team-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
          padding: 0;
          list-style: none;
        }

        .team-card {
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          padding: 20px;
          display: flex;
          align-items: center;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          cursor: default;
        }

        .team-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 20px rgba(0,0,0,0.15);
        }

        .team-img {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          object-fit: contain; /* show full image inside circle */
          margin-right: 20px;
          background-color: #f0f0f0;
          flex-shrink: 0;
          border: 2px solid #0077cc;
          padding: 5px; /* optional padding for better spacing inside circle */
        }

        .team-info {
          flex-grow: 1;
        }

        .team-name {
          font-weight: 700;
          font-size: 1.1rem;
          margin-bottom: 5px;
          color: #222;
        }

        .team-usn {
          font-size: 0.85rem;
          color: #777;
          margin-bottom: 8px;
          font-style: italic;
        }

        .team-role {
          font-size: 0.95rem;
          color: #555;
        }

        @media (max-width: 600px) {
          .team-list {
            grid-template-columns: 1fr; /* stack vertically on smaller screens */
          }
          .team-card {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .team-img {
            margin-right: 0;
            margin-bottom: 15px;
          }
        }
      `}</style>

      <div className="team-container">
        <h2>Our Team</h2>
        <ul className="team-list">
          {members.map(({ usn, name, role, img }) => (
            <li key={usn} className="team-card">
              <img src={img} alt={name} className="team-img" />
              <div className="team-info">
                <div className="team-name">{name}</div>
                <div className="team-usn">USN: {usn}</div>
                <div className="team-role">{role}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Team;
