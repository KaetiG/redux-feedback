import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class Header extends Component {
handleStartOver = () => {
    this.props.dispatch({ type: 'CLEAR_FEEDBACK' })
    this.props.history.push('/');
}

    render() {
        return (
            <header className="App-header">
                <h1 className="App-title">Feedback!</h1>
                <h4><i>Don't forget it!</i></h4>
                <button onClick={this.handleStartOver}>Start Over?</button>
            </header>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState: reduxState,
})

export default withRouter(connect(mapReduxStateToProps)(Header));