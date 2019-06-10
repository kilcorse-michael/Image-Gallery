import React from 'react';
import { NavLink } from 'react-router-dom';


//Component that handles linking to the various routes using React Bootstrap
function Links(){
  return(
  <div>
    <span>
      <NavLink to="/">Home</NavLink>
    </span>
    <br/>

      <NavLink to="/cats"> Cats </NavLink>
      <NavLink to="/golf"> Golf </NavLink>
      <NavLink to="/space"> Space </NavLink>
  </div>

  );

}

export default Links;
