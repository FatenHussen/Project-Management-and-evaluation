import React from 'react';
import { Link } from 'react-router-dom';
import image_i from '../../assets/vecteezy_business-analysis-data-control-team_5005511-1.jpg'
import './Fpage1.css'
const Fpage1 = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/log-in'>Log in</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/register'>Register</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className='full-s'>
    <div className='container-fff'>
    <div className='body--page'>
    <h3>Projects Managmement system</h3>
        <img src={image_i }/>
        <p> Build a software system to automate Managmement projects 
        artificial intelligence telenologies and machine learning</p>
        <Link to='/log-in'><button className='bou3'>Log In</button></Link>
        </div>
        </div>
    </div>
    </>
  );
};

export default Fpage1;
