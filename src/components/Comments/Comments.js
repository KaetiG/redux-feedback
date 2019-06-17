import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewView from '../ReviewView/ReviewView' //connection to ReviewView component

class Comments extends Component {
//----sets local state to an empty string----//
    state = {
        comments: '',
    }

    handleInputComments = (event) => {
        this.setState({
            comments: event.target.value
        })
    }
//-----upon button click, action is dispatched to the feedback reducer, 
//the action adds the value entered in the text area to the reduxState object
//lastly it brings the user to the next and final page
    handleComments = () => {
        this.props.dispatch({ type: 'ADD_FEEDBACK', payload: this.state })
        this.props.history.push('/review');
    }
    render() {
        return (
            <>
                <h3>Do You Have Any Comments/Concerns?</h3>
                <textarea type="text"
                    rows="8"
                    cols="55"
                    onChange={this.handleInputComments}
                    value={this.state.comments}
                    key={'comments'}>
                </textarea>
                <br /><br />
                <button onClick={this.handleComments}>Next</button>
                <ReviewView /> 
                {/* <ReviewView /> <- this displays the content stored in the ReviewView component (the table and button) */}
            </>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState: reduxState,
})
//------above code allows us to access the reduxState---------//
//-------we need this, the below code, and the top "connect" import in order to dispatch actions back to our feedback reducer
export default connect(mapReduxStateToProps)(Comments);