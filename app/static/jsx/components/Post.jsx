import React from 'react';
import { connect } from "react-redux";

export default class Post extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render(){
        return (
            <div className="post">
                <img alt="post image" className="post-img"/>
                <h3 className="main-post-header">{ this.props.main_post_header }</h3>
                <h4 className="second-post-header">{ this.props.second_post_header }</h4>
                <p className="post-text">{ this.props.post_text }</p>
            </div>
        );
    }
}