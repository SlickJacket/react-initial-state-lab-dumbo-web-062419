import React, { Component } from 'react';

class Bomb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            secondsLeft: this.props.initialCount
        }
    }
    render() { 
    const bomb = () => { if (this.state.secondsLeft  !== 0 ) {
            return  `${this.state.secondsLeft} seconds left before I go boom!`;
        } else {
            return "Boom!";
                }
            }
            return (  <div>{ bomb() }</div> 
        
            )};
}

export default Bomb;

