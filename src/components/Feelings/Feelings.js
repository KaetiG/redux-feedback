import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feelings extends Component {
    render() {
        return (
            <>
            </>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState: reduxState,
  })
  
  export default connect(mapReduxStateToProps)(Feelings);