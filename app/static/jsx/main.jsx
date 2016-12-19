import React from 'react';
import { Router,
  Route,
  Link,
  hashHistory,
  browserHistory,
  IndexRoute } from 'react-router';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import store from "./store.jsx";

import Post from "./components/Post.jsx";
import Header from "./components/Header.jsx";
import PostPopup from "./components/PostPopup.jsx"
import PostSection from "./components/PostSection.jsx"


class APP extends React.Component{
    /*
     * Main component that include header,
     *  sidebar and provive rouning on page
     */
    constructor(props) {
        super(props);
    }

    render(){
      //Render main component
      return (
        <Provider store={ store }>
            <div>
              <Header/>
              <PostPopup/>
              <PostSection/>
            </div>
        </Provider>
        );
    }
}

const NotFound = () => (
  <h1>404.. This page is not found!</h1>)

ReactDOM.render(
  //React routing
  (<Router history = {browserHistory}>
      <Route path = "/" component = {APP}>
         <IndexRoute component = {APP} />
         <Route path = '/404' component={NotFound} />
         <Route path = '*' component={NotFound} />
      </Route>
  </Router>),
  document.getElementById('app'));
