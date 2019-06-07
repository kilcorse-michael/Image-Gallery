import React, { Component} from 'react';
import { withRouter } from 'react-router-dom';

//Statefull Class Component in charge of search functions
class SearchForm extends Component {
  //initialize a state with "searchText"
  state = {
    searchText: ''
  }

  //using the event object, this tracks when there is a change to the input and updates state to equal that change
  onSearchChange = e =>{
    this.setState({ searchText: e.target.value });


  }


//This handles the function that are needed when the search form submits
  handleSubmit = e => {
    e.preventDefault();
    //"term" and "path" are used to create a new route out of the query value and then push that on the history object
    let term = this.query.value;
    let path = `/search/${term}`;
    this.props.history.push(path);
    //a call to the performSearch() method in App.js using the new query value typed in as the search parameter
    this.props.onSearch(this.query.value)
    //a call to the loadHandler function in App.js setting the loading state to "true"
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
