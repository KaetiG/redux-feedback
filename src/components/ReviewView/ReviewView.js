import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


class ReviewView extends Component {
    handleSubmit = () => {
        //POST ROUTE
        axios({
            method: 'POST',
            url: '/',
            data: this.props.reduxState.feedbackReducer
        }).then((response) => {
            this.props.history.push('/');
        }).then((response) => {
            this.props.dispatch({ type: 'CLEAR_FEEDBACK' })
        })
        console.log(this.props.reduxState)

    }
    render() {
        return (
            <>

                <h2>Review!</h2>
                <h3>How You're Feeling: {this.props.reduxState.feedbackReducer.feeling}</h3>
                <h3>I Understand This Much: {this.props.reduxState.feedbackReducer.understanding}</h3>
                <h3>How Supported Are You?: {this.props.reduxState.feedbackReducer.support}</h3>
                <h3>Comments/Concerns: {this.props.reduxState.feedbackReducer.comments}</h3>
                <button onClick={this.handleSubmit}>Submit Feedback</button>

            </>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState: reduxState,
})

export default withRouter(connect(mapReduxStateToProps)(ReviewView));