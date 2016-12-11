export default function reducer(state={
    user: {
      id: null,
      name: null,
      age: null,
    },
    text: "default"
  }, action) {
    if(action.type === "ADD_INFO") {
        return {...state, text: action.payload.text};
    }
    else{
      return state
    }
}
