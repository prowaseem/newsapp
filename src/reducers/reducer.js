import * as types from '../constants/ActionTypes'
import {CreateActions} from '../actions/action.js';


export default function reducer(state={
	loading: true,
	articles: null,
}, action){
	console.log('action', action);
	switch(action.type){
		case 'REQUEST_POSTS':
			return Object.assign({}, state, {loading: true});
		case 'GET_DATA':
			return Object.assign({}, state, {loading: false}, {data:action.articles});
		default:
			return state;
	}
};