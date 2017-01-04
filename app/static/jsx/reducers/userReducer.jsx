export default function reducer(state={
    user: {
      id: null,
      name: null,
      age: null,
    },
    add: false
  }, action) {
    switch(action.type)
    {
      case 'ADD_POST':
        return {...state, add: true};
      case 'POST_GOT':
        return {...state, post_info: action.payload, post_status: action.type};
      case 'USER_REGISTRATED':
        return state;
      default:
        return state;
    }
}
