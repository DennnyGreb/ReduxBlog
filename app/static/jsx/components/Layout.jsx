import React from "react";
import { connect } from "react-redux";

import { fetchUser } from "../actions/userActions.jsx";

@connect((store) => {
  return {
    user: store.user.user,
    userText: store.text,
  };
})
export default class Layout extends React.Component {
  fetchUser() {
    this.props.dispatch(fetchUser())
  }

  render() {
      console.log(this.props.userText);
    return <div>
      <button onClick={ this.fetchUser.bind(this) }>Click</button>
      <h1>{this.props.userText}</h1>
    </div>
  }
}
