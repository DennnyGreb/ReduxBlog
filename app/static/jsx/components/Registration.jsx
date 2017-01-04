import React from 'react';

import { connect } from "react-redux";

import registration from "../actions/userActions.jsx"

export default class Registration extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render(){
        return (
            <div>
				<div id="myModalReg" className="modal fade" role="dialog">
				    <div className="modal-dialog">
				        <div className="modal-content">
                            <RegistrationHeader/>
                            <RegistrationBody/>
				        </div>
			        </div>
			    </div>
			</div>
        );
    }
}

class RegistrationHeader extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render(){
        return (

				<div className="modal-header">
				    <button type="button" className="close" data-dismiss="modal">&times;</button>
				    <h3 className="create-post">Registration</h3>
				    <div className="material-icons post-icon">picture_in_picture</div>
				</div>      
        );
    }
}

@connect((store) => {
  return {
    userText: store.user.text,
  };
})
class RegistrationBody extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            full_name: '',
            email: '',
            password: '',
        };
        this.confirm = this.confirm.bind(this);
        this.changeValue = this.changeValue.bind(this);
    }

    confirm(event) {
        let data = {
            full_name: this.state.full_name,
            email: this.state.email,
            password: this.state.password
        }
		this.props.dispatch(registration(data));
	}

    changeValue(event) {
	   //Method, that make appropriate state variable for input value.
    	let state = [];
    	state[event.target.name] = event.target.value;
    	this.setState(state);
    }

    render(){
        return (
                <div>
                    <div className="modal-body">
				        <div className="control-group post-inputs">
          		    	    <div className="controls">
              	    		    <input type="text" name="full_name" placeholder="Enter your full name"
              	    		    className="input-xlarge main-input" value={this.state.full_name} onChange={this.changeValue}/>
				    			<input type="email" name="email" placeholder="Enter your email"
              	    		    className="input-xlarge main-input" value={this.state.email} onChange={this.changeValue}/>
				    			<input type="password" name="password" placeholder="Enter your full password"
              	    		    className="input-xlarge main-input" value={this.state.password} onChange={this.changeValue}/>
				    		</div>
                        </div>
				    </div>

                    <div className="modal-footer">
				    	<button name="cancel" type="submit" className="btn edit-modal-button edit-close" data-dismiss="modal">Cancel</button>
				    	<button name="confirm" type="submit" className="btn edit-modal-button edit-confirm" onClick={this.confirm} data-dismiss="modal">Confirm</button>
			        </div>
                </div>
        );
    }
}