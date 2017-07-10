import * as types from '../constants/ActionTypes'
import  API from '../API/index';
import fetch from 'isomorphic-fetch';

//export const newsFeed = (text=[]) => ({ type: types.GET_DATA, text })

export const requestPosts= () => {
  return {
    type: 'REQUEST_POSTS',
    text:{}
  }
}

export const newsFeed = (articles) => {
	return {
		type: 'GET_DATA',
		articles,
	}
}


export const CreateActions = (dispatch) => {
	
	var api = new API;
	return function(dispatch){
		dispatch(requestPosts())
		api.getData()
		.then(res => (
			res.json()
			), 
		error => console.log("An error occured", error))
		.then( response => {dispatch(newsFeed(response.articles));})
		
	}
	// return{
	// 	type: types.GET_DATA,
	// 	text: "hello"
	// };
}
