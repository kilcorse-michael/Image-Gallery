import React from 'react';
import SearchForm from './SearchForm';
import Links from './Links';


function Header(props){
  return (
    <div>
      <div className="header-title">
        <h1>Image Gallery App</h1>
      </div>
      <SearchForm handler={props.handler}onSearch={props.onSearch}/>
      <Links className="main-nav"/>
    </div>


  )

}

export default Header;
