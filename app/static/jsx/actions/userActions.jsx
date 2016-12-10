export function fetchUser() {
  console.log("I am in action!");
  const ADD_INFO = "ADD_INFO";
  return {
    type: ADD_INFO,
    payload: {
      text: "I have benn reduced!!!",
    }
  }
}