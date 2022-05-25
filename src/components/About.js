import React from 'react'
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1>About Us</h1>
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Consequuntur placeat laudantium, aperiam aspernatur rerum illo
            delectus asperiores fugit recusandae sunt,
             harum ratione quo. Obcaecati dolores doloribus explicabo alias, dolor a 
            
          </p>
          <NavLink to='/Contact' className="btn btn-outline-primary">Contact Us</NavLink>
        </div>

      </div>
    </div>
    </>
  
    )
}

export default About