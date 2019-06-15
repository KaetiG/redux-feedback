import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';

class Feelings extends Component {
state = {
    feelings: 1,
    }

    handleInputFeelz = (event) => {
        this.setState({
            feelings: event.target.value
        })
    }
    handleFeelings = () => {
        this.props.dispatch({type: 'ADD_FEEDBACK', payload: this.state.feelings})
    }
    render() {
        return (
            <Router>
                <label>Feeling?</label>
                <br />
                <input type="number" 
                    min="1" 
                    max="5" 
                    onChange={this.handleInputFeelz}
                    value={this.state.feelings}>
                </input>
                <br />
                <button onClick={this.handleFeelings}><Link to="/understanding">Next</Link></button>
                {/* need id, onClick */}
            </Router>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState: reduxState,
})

export default connect(mapReduxStateToProps)(Feelings);