import React from 'react';
import { NavLink } from 'react-router-dom';

function NotFound(){

  return(
    <div>
      <h1>404</h1>
      <h3>Cannot Find The Page You Are Looking For!</h3>
      <NavLink to="/">Click to Go Back!</NavLink>
    </div>
  );
}

export default NotFound;
