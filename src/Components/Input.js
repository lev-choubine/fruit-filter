import React, { Component } from 'react';

class List extends Component {
    constructor(props){
        super()
        this.state = {

            
        };
    }

    
    render(){
        return (
            <div>
                <label htmlFor="fruit-filter">Filter These Fruits: </label>
                <input type="text" value={this.props.value} onChange={this.props.onChange} name="fruit-filter"/>
            </div>
        )
    }
}

export default List;