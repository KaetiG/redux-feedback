import React, { Component } from 'react';
import { connect } from 'react-redux';

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
        this.props.dispatch({ type: 'ADD_FEEDBACK', payload: this.state.comments })
        this.props.history.push('/review');
    }
    render() {
        return (
            <>
                <label>Supported?</label>
                <br />
                <textarea type="text"
                    rows="8"
                    cols="70"
                    onChange={this.handletextareaComments}
                    value={this.state.Comments}>
                </textarea>
                <br />
                <button onClick={this.handleComments}>Next</button>

            </>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState: reduxState,
})

export default connect(mapReduxStateToProps)(Comments);