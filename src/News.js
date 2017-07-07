import React from 'react';
class News extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: this.props.title || '',
            link: this.props.link || '',
            image: this.props.image || ''
        };
    }
    render(){
        return(
            <div className="news-item row">
                <div className="col-sm-4 image-col thumbnail">
                    <img src={this.state.image} alt={this.state.title}/>
                </div>
                <div className="col-sm-8 title-col">
                    <a href={this.state.link}>{this.state.title}</a>
                </div>
            </div>
        );
    }
}

export default News;