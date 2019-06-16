import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewView from '../ReviewView/ReviewView'

class Understanding extends Component {
    state = {
        understanding: 1,
    }

    handleInputKnowledge = (event) => {
        this.setState({
            understanding: event.target.value
        })
    }
    handleKnowledge = () => {
        this.props.dispatch({ type: 'ADD_FEEDBACK', payload: this.state })
        this.props.history.push('/support');
    }
    render() {
        return (
            <>
                <h3>How Well Are You Understanding?</h3>
                <input type="number"
                    min="1"
                    max="5"
                    onChange={this.handleInputKnowledge}
                    value={this.state.understanding}
                    key={'understanding'}>
                </input>
                <br /><br />
                <button onClick={this.handleKnowledge}>Next</button>
                <ReviewView />
            </>

        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState: reduxState,
})

export default connect(mapReduxStateToProps)(Understanding);