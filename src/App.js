import React from 'react';
import Widget from './Widget';

class App extends React.Component{
    render(){
        return(
            <div className="container" id="main">
                <div className="row">
                    <Widget title="CNN"/>
                    <Widget title="BBC"/>
                </div>
            </div>
        );
    }
}

export default App;