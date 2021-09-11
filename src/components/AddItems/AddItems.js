import React from "react";
import { Component } from "react";
import './AddItems.css'


class AddItems extends Component {
    
    state = {
        name: '',
        age: ''
    }

    handleChange = (e) => {
        this.setState({
        [e.target.id] : e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state)
    }
    
    render(){
        return (    
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter your name" id="name" onChange={this.handleChange}/>
                    <input type="number" placeholder="Enter your age" id="age" onChange={this.handleChange}/>
                    <input type="Submit" value="Add"/>

                </form>
            </div>
        )
    }
    }

export default AddItems