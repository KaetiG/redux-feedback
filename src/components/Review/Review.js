import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Review extends Component {
    handleSubmit = () => {
        this.props.dispatch({ type: 'CLEAR_FEEDBACK' })
        //POST ROUTE
        axios({
            method: 'POST',
            url: `/`,
            data: this.props.reduxState.feedbackReducer
          }).then((response) => {
            this.props.history.push('/');
          })
        
    }
    render() {
        return (
            <>
                <table>
                    <tbody>
                        <tr>
                            <th>Feelings</th>
                            <th>Understanding</th>
                            <th>Support</th>
                            <th>Comments</th>
                        </tr>
                        <tr>
                            {this.props.reduxState.feedbackReducer.map((feedback) =>
                                <td>{feedback}</td>)}</tr>
                    </tbody>
                </table>
                <button onClick={this.handleSubmit}>Submit Feedback</button>

            </>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState: reduxState,
})

export default connect(mapReduxStateToProps)(Review);