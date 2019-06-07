import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Axios from 'axios';
import apiKey from './config.js';

//app componenets
import Header from './components/Header';
import Gallery from './components/Gallery';
import NotFound from './components/NotFound';
import Home from './components/Home'

class App extends Component {

  constructor(props) {
    super(props);

    //bind loadHandler method to "this" keyword
    this.loadHandler = this.loadHandler.bind(this);

    //initialize state for main app component
    this.state = {
      images: [],
      cats: [],
      golf: [],
      space: [],
      loading: true
    };
  }

//when the componenet first mounts these searches are performed populating the arrays in state
  componentDidMount() {
    this.performSearch("cats");
    this.performSearch("golf");
    this.performSearch("space");
}

//function that when triggered sets the loading state to true
  loadHandler(){
    this.setState({
      loading: true
    })
  }

// This function performs all of the api requests and handling
  performSearch = (query) =>{
    Axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        //using a switch statement the value of "query" is checked and depending on the outcome the data is stored in the corresponding state
        switch(query){
          case "cats":
            this.setState(
              {
              cats: response.data.photos.photo,
              loading: false
            })
            break;
          case "golf":
            this.setState(
              {
              golf: response.data.photos.photo,
              loading: false
            })
            break;
          case "space":
            this.setState(
              {
              space: response.data.photos.photo,
              loading: false
            })
            break;
          default:
            this.setState(
              {
              images: response.data.photos.photo,
              loading: false
            })
            break;
        }
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render(){

    return (
      //using React-Router all the route paths are handled and state is passed into the correct components as props
      <BrowserRouter>
        <div className="container">
        <Header handler={this.loadHandler} onSearch={this.performSearch}/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search/:term" render={(props)=><Gallery{...props} loading={this.state.loading} data={this.state.images} />}/>
          <Route path="/cats" render={(props)=><Gallery{...props} loading={this.state.loading} data={this.state.cats} />} />
          <Route path="/golf" render={(props)=><Gallery{...props} loading={this.state.loading} data={this.state.golf} />} />
          <Route path="/space" render={(props)=><Gallery{...props} loading={this.state.loading} data={this.state.space} />} />
          <Route component={NotFound} />
        </Switch>
        </div>
      </BrowserRouter>
    );

  }

}

export default App;
