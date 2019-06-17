import React, { Component } from 'react';//allows use of react/components
import { connect } from 'react-redux';//connection to store/reducers
import ReviewView from '../ReviewView/ReviewView'//connection to component

class Understanding extends Component {
    state = {
        understanding: 1,
    }
    //I have the feedback starting at 1 so that I do not have to do an extra ternary conditional for the Next button and make it disabled
    //if a number is not chosen. They just default to sad I guess lol
    handleInputKnowledge = (event) => {
        this.setState({
            understanding: event.target.value
        })
    }
      //--------ACTION DISPATCH---------//
    handleKnowledge = () => {
        this.props.dispatch({ type: 'ADD_FEEDBACK', payload: this.state })//sends the value in local state to the object in reduxState
        this.props.history.push('/support');//brings user to next page
    }
    render() {
        return (
            <>
                <h3>How Well Are You Understanding?</h3>
                <input type="number"
                    min="1"//sets min input amount to 1
                    max="5"//sets max to 5
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
//------above code allows us to access the reduxState---------//
//-------we need this, the below code, and the top "connect" import in order to dispatch actions back to our feedback reducer
export default connect(mapReduxStateToProps)(Understanding);