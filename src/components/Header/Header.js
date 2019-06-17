//-----------REACT-------------//
import React, { Component } from 'react';
//----------REDUX----------------//
import { connect } from 'react-redux';
//------------ROUTER LINK--------------//
import { withRouter } from 'react-router';

class Header extends Component {
handleStartOver = () => {
    this.props.dispatch({ type: 'CLEAR_FEEDBACK' })
    this.props.history.push('/');
//---on the click of the Start Over button, action is dispatched to "CLEAR_FEEDBACK" 
//resulting in the reduxState object emptying
//the user is also brought back to the home page
}

    render() {
        return (
            <header className="App-header">
            {/* below code is ternary, if the user is on any page besides the home page, the start over button displays */}
            <h1>Feedback! Feedback!</h1>
                {this.props.location.pathname === '/' ?
                <h2>click "start" to begin!</h2>
                :
                <button onClick={this.handleStartOver}>Start Over?</button>}
            </header>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState: reduxState,
})
//------above code allows us to access the reduxState---------//
//-------we need this, the below code, and the top "connect" import in order to dispatch actions back to our feedback reducer
export default withRouter(connect(mapReduxStateToProps)(Header));