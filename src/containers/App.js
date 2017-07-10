import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import _ from 'lodash'
import {CreateActions} from '../actions/action.js';
import {connect} from 'react-redux';
import reducer from '../reducers'
import {GET_DATA} from '../constants/ActionTypes';
import { bindActionCreators } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import configureStore from '../store/configureStore.js';
const store = configureStore;

// function getNewsFeed(sourceAtt="metro", sortAtt="top") {
//   const URL = "https://newsapi.org/v1/articles?apiKey=2133e5fc0e4b4cae930c479f8e093468&source="+sourceAtt+"&sortBy="+sortAtt;
//   return fetch(URL).then(response => response.json()).then(json => console.log(json)).catch(error => console.log(error));
// }




class App extends Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    this.props.CreateActions();
    //store.dispatch.this.props.CreateActions();
  }

  
  render() {
    //var a = JSON.parse({this.props.state});
        return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="MyNewsData">
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  console.log("mapStateToProps", state);
  return {
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({CreateActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
