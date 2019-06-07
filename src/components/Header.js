import React from 'react';
import SearchForm from './SearchForm';
import Links from './Links';

//Component in where the title, search, and navigation bar is stored. Also handles passing props to the "SearchForm" componenet
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
