import React from "react";

function Login() {
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }
        body, html, #root {
          height: 100%;
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        .login-wrapper {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }
        .login-form {
          width: 100%;
          max-width: 400px;
          background: white;
          padding: 45px 40px;
          border-radius: 16px;
          box-shadow: 0 15px 40px rgba(118, 75, 162, 0.4);
          text-align: center;
          transition: transform 0.3s ease;
        }
        .login-form:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 60px rgba(118, 75, 162, 0.6);
        }
        .login-form h2 {
          margin-bottom: 30px;
          color: #5a3e99;
          font-weight: 800;
          font-size: 2.2rem;
          letter-spacing: 1.1px;
          text-transform: uppercase;
        }
        .login-form input {
          width: 100%;
          padding: 16px 20px;
          margin-bottom: 22px;
          border: 2px solid #ddd;
          border-radius: 12px;
          font-size: 1.15rem;
          color: #333;
          background-color: #fafafa;
          transition: border-color 0.3s ease, background-color 0.3s ease;
          box-shadow: inset 2px 2px 5px #e0e0e0, inset -2px -2px 5px #ffffff;
        }
        .login-form input::placeholder {
          color: #a59ecb;
          font-weight: 600;
        }
        .login-form input:focus {
          outline: none;
          border-color: #7b5cff;
          background-color: #fff;
          box-shadow: 0 0 8px #7b5cff;
        }
        .login-form button {
          width: 100%;
          padding: 16px;
          background: linear-gradient(90deg, #7b5cff, #9d7bff);
          color: white;
          font-size: 1.25rem;
          font-weight: 700;
          border: none;
          border-radius: 14px;
          cursor: pointer;
          box-shadow: 0 6px 16px rgba(123, 92, 255, 0.6);
          transition: background 0.4s ease, box-shadow 0.4s ease;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        .login-form button:hover {
          background: linear-gradient(90deg, #9d7bff, #7b5cff);
          box-shadow: 0 10px 26px rgba(123, 92, 255, 0.8);
        }
        @media (max-width: 480px) {
          .login-form {
            padding: 35px 30px;
          }
          .login-form h2 {
            font-size: 1.8rem;
            margin-bottom: 25px;
          }
          .login-form input {
            font-size: 1rem;
            padding: 14px 18px;
            margin-bottom: 18px;
          }
          .login-form button {
            font-size: 1.1rem;
            padding: 14px;
          }
        }
      `}</style>

      <div className="login-wrapper">
        <form className="login-form">
          <h2>Login</h2>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;
