import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewView from '../ReviewView/ReviewView'

class Support extends Component {
    state = {
        support: 1,
    }

    handleInputSupport = (event) => {
        this.setState({
            support: event.target.value
        })
    }
    handleSupport = () => {
        this.props.dispatch({ type: 'ADD_FEEDBACK', payload: this.state })
        this.props.history.push('/comments');
    }
    render() {
        return (
            <>
                <h3>How Supported Do You Feel?</h3>
                <input type="number"
                    min="1"
                    max="5"
                    onChange={this.handleInputSupport}
                    value={this.state.support}
                    key={'support'}>
                </input>
                <br /><br />
                <button onClick={this.handleSupport}>Next</button>
                <ReviewView />
            </>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState: reduxState,
})

export default connect(mapReduxStateToProps)(Support);