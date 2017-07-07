import React from 'react';
import News from './News';
import moment from 'moment';

class Widget extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: this.props.title || 'Untitled',
            today: moment(new Date()).format('ll')
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

export default Widget;