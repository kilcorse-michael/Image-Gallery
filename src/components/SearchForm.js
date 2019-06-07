import React, { Component} from 'react';
import { withRouter } from 'react-router-dom';
class SearchForm extends Component {
  state = {
    searchText: ''
  }

  onSearchChange = e =>{
    this.setState({ searchText: e.target.value });


  }



  handleSubmit = e => {
    e.preventDefault();
    let term = this.query.value;
    let path = `/search/${term}`;
    this.props.history.push(path);
    this.props.onSearch(this.query.value)
    this.props.handler();
    e.currentTarget.reset();

  }
  render(){
    return(
        <div>
        <form className="search-form" onSubmit={this.handleSubmit}>
        <input ref={(input) => this.query = input}
               type="search"
               onChange={this.onSearchChange}
               name="search"
               placeholder="Search..." />
          <button type="submit" ><i className="fa fa-search"></i></button>
        </form>
        </div>


    );
  }
}

export default withRouter(SearchForm);
