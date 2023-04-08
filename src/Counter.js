import React, { Component } from 'react'

class Counter extends Component{
  constructor(props){
    super(props)
    this.state = {
      count:0
    }
  }

  plus = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

   minus = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render (){
    return(
      <div>
         <p>count: {this.state.count}</p>
         <button onClick = {this.plus}>+</button>
         <button onClick = {this.minus}>-</button>
      </div>
      )
  }
}

export default Counter