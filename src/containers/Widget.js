import React from 'react';
import News from './News';
import moment from 'moment';
import {CreateActions} from '../actions/action.js';
import {connect} from 'react-redux';
import reducer from '../reducers'
import {GET_DATA} from '../constants/ActionTypes';
import { bindActionCreators } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import configureStore from '../store/configureStore.js';
import Widget from './Widget';
const store = configureStore;

class Widget extends React.Component{
    constructor(props){
        super(props);
        this.source = this.props.source;
        this.sort = this.props.sort;
        this.state = {
            title: this.source || 'Untitled',
            articles: {}
        };
    }
    render(){
        return(
            <div className="col-sm-3 widget">
                <header>{this.state.title} <span className="date">{this.state.today}</span></header>
                <section>
                    <ul className="news">
                        <li>
                            <News title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eaque harum illo." link="http://example.com" image="http://lorempixel.com/400/200"/>
                            <News title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eaque harum illo." link="http://example.com" image="http://lorempixel.com/400/200"/>
                            <News title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eaque harum illo." link="http://example.com" image="http://lorempixel.com/400/200"/>
                            <News title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eaque harum illo." link="http://example.com" image="http://lorempixel.com/400/200"/>
                        </li>
                    </ul>
                </section>
                <footer><button className="btn btn-default">See More</button></footer>
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

export default connect(mapStateToProps, mapDispatchToProps) (Widget);