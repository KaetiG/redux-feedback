import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';

class Support extends Component {
    state = {
        support: 1,
    }

    handleInputSupport = (event) => {
        this.setState({
            support: event.target.value
        })
    }
    handleFeelings = () => {
        this.props.dispatch({ type: 'ADD_FEEDBACK', payload: this.state.support })
    }
    render() {
        return (
            <Router>
                <label>Supported?</label>
                <br />
                <input type="number"
                    min="1"
                    max="5"
                    onChange={this.handleInputSupport}
                    value={this.state.support}>
                </input>
                <br />
                <button onClick={this.handleSupport}><Link to="/support">Next</Link></button>
                {/* need id, onClick */}
            </Router>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState: reduxState,
})

export default connect(mapReduxStateToProps)(Support);