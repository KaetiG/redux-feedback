import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewView from '../ReviewView/ReviewView'


class Feelings extends Component {
state = {
    feeling: 1,
    }

    handleInputFeelz = (event) => {
        this.setState({
            feeling: event.target.value
        })
    }
    handleFeelings = () => {
        this.props.dispatch({type: 'ADD_FEEDBACK', payload: this.state})
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
                    value={this.state.feeling}
                    key={'feelings'}>
                </input>
                <br />
                <button onClick={this.handleFeelings}>Next</button>
                <ReviewView />
            </>   
            
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState: reduxState,
})

export default connect(mapReduxStateToProps)(Feelings);