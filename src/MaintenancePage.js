import React from 'react'
import './MaintenancePage.css'
import logo from './logo.png'; 

function MaintenancePage() {
  return (
   
    <div className="container">
      <div className="content">
        <img src={logo} alt="Website Logo" className="logo" />
        
       
        
        <div className="illustration">
          <img src="https://cdn.dribbble.com/users/955200/screenshots/6068394/maintenace2.gif" alt="Maintenance Illustration" />
        </div>
        <h1>Sorry!</h1>
        <p>We're doing some maintenance</p>
        <p className="description">
          Contact us to know more about this
        </p>
        <form className="notify-form">
          <input type="email" placeholder="Enter Your Email" required />
          <button type="submit">Notify Me</button>
          </form>
      </div>
    </div>
  );
}
   

export default MaintenancePage
