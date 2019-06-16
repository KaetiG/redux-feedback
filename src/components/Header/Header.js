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

export default withRouter(connect(mapReduxStateToProps)(Header));