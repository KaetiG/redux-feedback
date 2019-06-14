import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feelings extends Component {
    render() {
        return (
            <>
                <label>Feeling?</label>
                    <br />
                <input type="number" min="0" max="5"></input>
                <br />
                <button>Next</button>
            </>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState: reduxState,
  })
  
  export default connect(mapReduxStateToProps)(Feelings);