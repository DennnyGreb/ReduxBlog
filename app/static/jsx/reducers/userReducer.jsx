export default function reducer(state={
    user: {
      id: null,
      name: null,
      age: null,
    },
    text: "default"
  }, action) {
    console.log(action);
    if(action.type === "ADD_INFO") {
      console.log("I am in if!!!!!");
        return {...state, text: action.payload.text};
    }
    else{
      console.log("I am in else");
      return state
    }
}
