import axios from 'axios';

import store from '../store.jsx';

export default function addPost(data) {
  return function saveUsers() {
    store.dispatch((dispatch) => {
			store.dispatch({type: 'START_SAVE_POST'});
			axios.post('/save_post', {
          data: data
  			})
  			.then(function (response) {
  				store.dispatch({type: 'POST_SAVED', payload: data.post_name});
					console.log(response);
  			})
  			.catch(function (error) {
  				store.dispatch({type: 'ERROR_SAVE_POST'});
  			});
		});
  }
}

export function getPosts(data) {
  return function getPost() {
    store.dispatch((dispatch) => {
			store.dispatch({type: 'START_GETTING_POST'}); 
			axios.post('/get_posts', {
          data: data
  			})
  			.then(function (response) {
  				store.dispatch({type: 'POST_GOT', payload: response.data});
					console.log(response);
  			})
  			.catch(function (error) {
  				store.dispatch({type: 'ERROR_GETTING_POST'});
  			});
		});
  }
}