import React, { Component } from 'react';
import { connect } from 'react-redux';


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
        this.props.history.push('/understanding');
    }
    render() {
        return (
            <>
                <label>Feeling?</label>
                <br />
                <input type="number" 
                    min="1" 
                    max="5" 
                    onChange={this.handleInputFeelz}
                    value={this.state.feelings}>
                </input>
                <br />
                <button onClick={this.handleFeelings}>Next</button>
            </>   
            
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState: reduxState,
})

export default connect(mapReduxStateToProps)(Feelings);