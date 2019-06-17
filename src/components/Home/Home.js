import React, { Component } from 'react';
//literally all there is here is the start button and the import/export :P
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