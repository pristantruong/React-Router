import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isChecked: false
        }
    }

    onClick = (isChecked) => {
        this.setState({
            isChecked: isChecked
        })
    }

    render() {
        var { isChecked } = this.state;
        return (
            <div>
                Contact
                <br />
                <button type="button" className="btn btn-success" onClick={()=> this.onClick(false)}>Accept</button>
                <br />
                <button type="button" class="btn btn-danger" onClick={() => this.onClick(true)}>Denied</button>
                <Prompt 
                    when={isChecked}
                    message={location => (`Do you want access url ${location.pathname}`)}
                />
            </div>
        );
    }
}

export default Contact;
