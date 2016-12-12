export default function reducer(state={
    user: {
      id: null,
      name: null,
      age: null,
    },
    add: false
  }, action) {
    if(action.type === "ADD_POST") {
        return {...state, add: true};
    }
    else{
      return state
    }
}
