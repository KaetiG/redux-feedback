import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <>
            <button className='startButton' onClick={() => {this.props.history.push('/feelings')}}>Start</button>
            </>   
            
        )
    }
}

export default Home;