export default function reducer(state={
    user: {
      id: null,
      name: null,
      age: null,
    },
    text: "default"
  }, action) {

    switch (action.type) {
      case "ADD_INFO": {
        return {...state, text: action.payload.text}
      }
    }
    return state
}
