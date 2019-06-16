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
            <h2 className='reviewText'>Review!</h2>
            <table className='center'>
                <thead>
                    <tr>
                        {/* <th>Review</th> */}
                    </tr>
                    <tr>
                        <td className='feedbackType'>I'm Feeling:</td>
                        <td> {this.props.reduxState.feedbackReducer.feeling}</td>
                    </tr>
                    <tr>
                    <td className='feedbackType'>I Understand:</td>
                        <td> {this.props.reduxState.feedbackReducer.understanding}</td>
                    </tr>
                    <tr>
                    <td className='feedbackType'>I'm Supported:</td>
                        <td> {this.props.reduxState.feedbackReducer.support}</td>
                    </tr>
                    <tr>
                    <td className='feedbackType'>Comments/Concerns:</td>
                        <td> {this.props.reduxState.feedbackReducer.comments}</td>
                    </tr>
                </thead>
            </table>
            <br />
                
                {this.props.location.pathname === '/feelings' 
                || this.props.location.pathname === '/understanding' 
                || this.props.location.pathname === '/support'
                || this.props.location.pathname === '/comments' ?
                    <>
                        <button disabled>Incomplete</button><br />
                    </>
                    :
                    <>
                        <button onClick={this.handleSubmit}>Submit</button><br />
                    </>
                }

            </>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState: reduxState,
})

export default withRouter(connect(mapReduxStateToProps)(ReviewView));
