import axios from 'axios';

import store from '../store.jsx';

export default function registration(data) {
  return function() {
    store.dispatch((dispatch) => {
			store.dispatch({type: 'START_REGISTRATION'});
			axios.post('/registration', {
                data: data
  			})
  			.then(function (response) {
  				store.dispatch({type: 'USER_REGISTRATED'});
				console.log(response);
  			})
  			.catch(function (error) {
  				store.dispatch({type: 'ERROR_REGISTRATION'});
  			});
		});
  }
}