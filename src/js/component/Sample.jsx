import React from 'react';
import PropTypes from 'prop-types';
import Connect from '../store/connect';

class Sample extends React.Component {
  render() {
    console.log(this.props);
    return <h1>test</h1>;
  }
}

Sample.propTypes = {
  children: PropTypes.any
};

export default Connect(Sample);

