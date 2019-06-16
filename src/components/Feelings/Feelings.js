//-----------------IMPORTS----------------------//
import React, { Component } from 'react'; //allows us to use React Components
import { connect } from 'react-redux'; //connects the reduxState to this component
//----------COMPONENTS IMPORTED-------------//
import ReviewView from '../ReviewView/ReviewView'; 

class Feelings extends Component {
state = {
    feeling: 1,
    }
//I have the feedback starting at 1 so that I do not have to do an extra ternary conditional for the Next button and make it disabled
//if a number is not chosen. They just default to sad I guess lol
   
    handleInputFeelz = (event) => {
        this.setState({
            feeling: event.target.value
        })
    }
    //--------ACTION DISPATCH---------//
    handleFeelings = () => {
        this.props.dispatch({type: 'ADD_FEEDBACK', payload: this.state}) //sends the value in local state to the object in reduxState
        this.props.history.push('/understanding'); //brings user to next page
    }
    
    render() {
        return (
            <>
                <label>Feeling?</label>
                <br />
                <input type="number" 
                    min="1" 
                    max="5" 
                    onChange={this.handleInputFeelz}
                    value={this.state.feeling}
                    key={'feelings'}>
                </input>
                <br /><br />
                <button onClick={this.handleFeelings}>Next</button>
                <ReviewView />
            </>   
            
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState: reduxState,
})

export default connect(mapReduxStateToProps)(Feelings);