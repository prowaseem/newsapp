import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import configureStore from './store/configureStore';
import {GET_DATA} from './constants/ActionTypes';

const initialState = {
  type: GET_DATA,
  text: "helloInitialState"
}

const store = configureStore();
//const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(<div>
	<Provider store={store}>
<App 
	source = "bbc-news"
	sort = "top"/>
	</Provider>

	</div>, document.getElementById('root'));
registerServiceWorker();
