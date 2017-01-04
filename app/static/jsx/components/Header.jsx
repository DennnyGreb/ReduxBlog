import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from "react-redux";

import store from "../store.jsx";

import { addPost } from "../actions/postActions.jsx";


@connect((store) => {
  return {
    userText: store.user.text,
  };
})
export default class Header extends React.Component {

    constructor(props){
      super(props);

      this.state = {};
    }

    handleAddClick(event)
    {
        this.props.dispatch(addPost());
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
                	  <li className="main-nav-li">
                      <a className="blog-link" data-toggle="modal" data-target="#myModalReg">Registration</a>
                    </li>
                </ul>
              </div>
            </div>
          </header>
          <section className="first-section">
            <div className="container">
              <div className="sub-header2">
                <a className="blog-link" data-toggle="modal" data-target="#myModal">Add post</a> 
                <input placeholder="Search" className="blog-input"/>
                <button className="searchbutton">
                  <i className="glyphicon glyphicon-search"></i>
                </button>
              </div>
            </div>
          </section>
        </div>
      );
    }
}