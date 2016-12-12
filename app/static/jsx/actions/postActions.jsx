import axios from 'axios';

import store from '../store.jsx';

export default function addPost(data) {
  return function saveUsers() {
    store.dispatch((dispatch) => {
			store.dispatch({type: 'START_SAVE_POST'});
			axios.post('/add_post', {
          data: data
  			})
  			.then(function (response) {
  				store.dispatch({type: 'SAVE_POST'});
  			})
  			.catch(function (error) {
  				store.dispatch({type: 'ERROR_SAVE_POST'});
  			});
		});
  }
}