import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewView from '../ReviewView/ReviewView'

class Comments extends Component {
    state = {
        comments: '',
    }

    handleInputComments = (event) => {
        this.setState({
            comments: event.target.value
        })
    }
    handleComments = () => {
        this.props.dispatch({ type: 'ADD_FEEDBACK', payload: this.state })
        this.props.history.push('/review');
    }
    render() {
        return (
            <>
                <label>Comments/Concerns?</label>
                <br />
                <textarea type="text"
                    rows="8"
                    cols="70"
                    onChange={this.handleInputComments}
                    value={this.state.comments}
                    key={'comments'}>
                </textarea>
                <br />
                <button onClick={this.handleComments}>Next</button>
                <ReviewView />
            </>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState: reduxState,
})

export default connect(mapReduxStateToProps)(Comments);