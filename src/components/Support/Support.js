import React, { Component } from 'react';//allows use of react/react components
import { connect } from 'react-redux';//connection to store/reducer
import ReviewView from '../ReviewView/ReviewView'//connection to component

class Support extends Component {
    state = {
        support: 1,
    }
    //I have the feedback starting at 1 so that I do not have to do an extra ternary conditional for the Next button and make it disabled
    //if a number is not chosen. They just default to sad I guess lol
    handleInputSupport = (event) => {
        this.setState({
            support: event.target.value
        })
    }
    //--------ACTION DISPATCH---------//
    handleSupport = () => {
        this.props.dispatch({ type: 'ADD_FEEDBACK', payload: this.state })//sends the value in local state to the object in reduxState
        this.props.history.push('/comments');//brings user to next page
    }
    render() {
        return (
            <>
                <h3>How Supported Do You Feel?</h3>
                <input type="number"
                    min="1"//sets minimum number input to 1
                    max="5"//sets max to 5
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
//------above code allows us to access the reduxState---------//
//-------we need this, the below code, and the top "connect" import in order to dispatch actions back to our feedback reducer
export default connect(mapReduxStateToProps)(Support);