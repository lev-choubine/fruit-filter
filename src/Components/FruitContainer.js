import React, { Component } from 'react';
import List from './List';
import Input from './Input';

class FruitContainer extends Component {
    constructor(props){
        super()
        this.state = {
         //initialize the fruit list to the full list passed into props
         fruitsToDisplay: props.fruits,
         // initialize the filter value to empty string
         filterValue: ''
        };
    }

    handleFilterChange=(e)=>{
      e.preventDefault();
      let filterValue = e.target.value;
      const filterFruitList = this.props.fruits.filter(fruit => {
          return fruit.toLowerCase().includes(filterValue.toLowerCase());
      })
      this.setState({fruitsToDisplay: filterFruitList, filterValue})
    }
    render(){
        return (
            <div>
               <Input value={this.state.filterValue} onChange={this.handleFilterChange}/>
               <List fruits={this.state.fruitsToDisplay}/>
            </div>
        )
    }
}

export default FruitContainer;