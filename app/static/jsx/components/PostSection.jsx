import React from 'react';

import { connect } from 'react-redux';

import axios from 'axios';

import store from "../store.jsx";
import { getPosts } from '../actions/postActions.jsx';

import Post from './Post.jsx';


@connect((store) => {
  return {
    post_info: store.user.post_info,
    post_status: store.user.post_status,
    postComponent: null
  };
})
export default class PostSection extends React.Component
{
    constructor(props){
        super(props);
        this.state = {postName: ''};
    }

    componentWillMount(){
      let data = { post_name: 'Love' }
      this.props.dispatch(getPosts(data));
      /*axios.post("/login", {
        data: {
          full_name: "Denis Grebenets222",
          password: "Hello"
        }
      })
      .then(function(response){
        console.log(response);
      })
      .catch(function(response){
        console.log(response);
      })*/
    }

    render(){
        return (
				<section className="post-section">
            <h1>Post Section</h1>
            {
              this.props.post_status === "POST_GOT"
              ? <Post main_post_header={ this.props.post_info.post_name }
                second_post_header={ this.props.post_info.post_sub }
                post_text={ this.props.post_info.post_desc }/>
              : null
            }
				</section>
        );
    }
}