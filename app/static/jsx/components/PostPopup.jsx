import React from 'react';

import { connect } from 'react-redux';

import axios from 'axios';

import store from "../store.jsx";
import addPost from '../actions/postActions.jsx';


@connect((store) => {
  return {
    userText: store.user.text,
  };
})
export default class PostPopup extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
			post_name: "",
			post_img: "",
			post_sub: "",
			post_desc: "",
        };
        this.changeValue = this.changeValue.bind(this);
		this.confirm = this.confirm.bind(this);
    }

	changeValue(event) {
	   //Method, that make appropriate state variable for input value.
       let state = [];
       state[event.target.name] = event.target.value;
       this.setState(state);
    }

	confirm(event) {
		let data = { 
			post_name: this.state.post_name,
			post_img: this.state.post_img,
			post_sub: this.state.post_sub,
			post_desc: this.state.post_desc,
		}
		this.props.dispatch(addPost(data));
	}

    render(){
        return (
				<div>
					<div id="myModal" className="modal fade" role="dialog">
					  <div className="modal-dialog">
					    <div className="modal-content">
					      <div className="modal-header">
					          <button type="button" className="close" data-dismiss="modal">&times;</button>
							  <h3 className="create-post">Create New</h3>
							  <div className="material-icons post-icon">picture_in_picture</div>
					      </div>
					      <div className="modal-body">
							  <div className="control-group post-inputs">
          					<div className="controls">
              				  <input type="text" name="post_name" placeholder="Post name"
              				  className="input-xlarge main-input" value={this.state.post_name} onChange={this.changeValue}/>
												<input type="text" name="post_img" placeholder="Post image url"
              				  className="input-xlarge main-input" value={this.state.post_img} onChange={this.changeValue}/>
												<input type="text" name="post_sub" placeholder="Post image url"
              				  className="input-xlarge main-input" value={this.state.post_sub} onChange={this.changeValue}/>
												<textarea type="text" name="post_desc" placeholder="Post description"
              				  className="input-xlarge main-input" value={this.state.post_desc} onChange={this.changeValue}/>
											</div>
						  </div>
				         <div className="modal-footer">
						 	<button name="cancel" type="submit" className="btn edit-modal-button edit-close" data-dismiss="modal">Cancel</button>
							<button name="confirm" type="submit" className="btn edit-modal-button edit-confirm" onClick={this.confirm} data-dismiss="modal">Confirm</button>
				         </div>
				    </div>
				  	</div>
					</div>
					</div>
				</div>
        );
    }
}