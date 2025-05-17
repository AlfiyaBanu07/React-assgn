import React from 'react';
import './App.css'; // Make sure this file contains the styles below

function App() {
  return (
    <div className="register-container">
      <div className="form-wrapper">
        <h2>Register</h2>
        <form>
          <input type="text" placeholder="Username" required/>
          <input type="email" placeholder="Email" required/>
          <input type="password" placeholder="Password" required />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}
export default App;