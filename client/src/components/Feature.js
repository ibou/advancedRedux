import React, { Component } from 'react';
import { connect } from 'react-redux'
import requireAuth from './requireAuth';
import * as actions from '../actions/index';

class Feature extends Component {
componentWillMount() {
  this.props.fetchMessageAuth();
}


  render() {
    return <div>This is the feature!</div>;
  }
}
 
export default connect(null, actions)(requireAuth(Feature))
