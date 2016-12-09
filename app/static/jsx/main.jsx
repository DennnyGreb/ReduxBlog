import React from 'react';
import { Router,
  Route,
  Link,
  hashHistory,
  browserHistory,
  IndexRoute } from 'react-router';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import Layout from "./components/Layout.jsx";
import store from "./store.jsx";
import fetchUser from "./actions/userActions.jsx"


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
              <Header/>
        </Provider>
        );
    }
}


class Header extends React.Component {

    constructor(props){
      super(props);

      this.state = {};
    }

    render() {

      return(
        <div>
          <header id="header" className="navbar" role="navigation">
            <div className="container">
              <div className="sub-header">
                  <h1 className="main-header">Tales</h1>
                  <ul className="main-nav">
                	  <li className="main-nav-li"><a>First</a></li>
                	  <li className="main-nav-li"><a>Second</a></li>
                	  <li className="main-nav-li"><a>Third</a></li>
                </ul>
              </div>
            </div>
          </header>
          <section className="first-section">
            <div className="container">
              <div className="sub-header2">
                <a className="blog-link">Blog</a>
                <input placeholder="Search" className="blog-input"/>
                <button className="searchbutton">
                  <i className="glyphicon glyphicon-search"></i>
                </button>
              </div>
            </div>
          </section>
          <Layout/>
        </div>
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
