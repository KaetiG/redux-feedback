import React, { Component } from 'react'; //allows us to use components 
import axios from 'axios'; //allows us to use axios to send a "promise" to the server POST request
import { connect } from 'react-redux'; //connection to reduxState
import { withRouter } from 'react-router';


class ReviewView extends Component {
    
    handleSubmit = () => {
//-------------POST ROUTE----------------//
        axios({
            method: 'POST',
            url: '/',
            data: this.props.reduxState.feedbackReducer
        }).then((response) => {
            this.props.history.push('/'); //brings us back to the home page
        }).then((response) => {
            this.props.dispatch({ type: 'CLEAR_FEEDBACK' }) //dispatches action causing reducer "CLEAR_FEEDBACK" to activate
            //resulting in reducer function emptying the reduxState back to an empty object
        })
        console.log(this.props.reduxState)

    }
    //-----------CODE BELOW DISPLAYS ON ALL PAGES EXCEPT HOME PAGE-----------//
    render() {
        return (
            <>
            <h2 className='reviewText'>Review!</h2>
            {/* //---table displays the current properties currently stored in reduxState---// */}
            <table className='center'>
                <thead>
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
                {/* //--------TERNARY CONDITIONAL FOR SUBMIT AND INCOMPLETE BUTTONS-------// */}
                {/* If the user is on any page besides the final review page, the disabled button "Incomplete shows" */}
                {this.props.location.pathname === '/feelings' 
                || this.props.location.pathname === '/understanding' 
                || this.props.location.pathname === '/support'
                || this.props.location.pathname === '/comments' ?
                    <>
                        <button className='incompleteButton' disabled>Incomplete</button><br />
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
//------above code allows us to access the reduxState---------//
//-------we need this, the below code, and the top "connect" import in order to dispatch actions back to our feedback reducer
export default withRouter(connect(mapReduxStateToProps)(ReviewView));
