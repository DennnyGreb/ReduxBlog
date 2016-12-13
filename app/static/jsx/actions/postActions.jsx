import axios from 'axios';

import store from '../store.jsx';

export default function addPost(data) {
  return function saveUsers() {
    store.dispatch((dispatch) => {
			store.dispatch({type: 'START_SAVE_POST'});
			axios.post('/PostController', {
          data: data
  			})
  			.then(function (response) {
  				//store.dispatch({type: 'SAVE_POST'});
					console.log(response);
  			})
  			.catch(function (error) {
  				store.dispatch({type: 'ERROR_SAVE_POST'});
  			});
		});
  }
}