import React from 'react';
import PropTypes from 'prop-types';
import Connect from '../store/connect';
import * as Actions from '~/store/actions'

@Connect
class Sample extends React.Component {
  constructor (props) {
    super(props);
    this.onIncrement = this.onIncrement.bind(this);
  }

  onIncrement() {
    this.props.dispatch(Actions.increment());
  }

  render() {
    console.log(this.props);
    const { store, dispatch } = this.props;
    return (
      <div>
        <div>{store.user.name}</div>
        <div>{store.count}</div>
        <div>
          <input type="button" onClick={this.onIncrement} value="+"/>
          <input type="button" onClick={()=>{dispatch(Actions.decrement())}} value="-"/>
        </div>
        <h1>test</h1>
      </div>
    );
  }
}

Sample.propTypes = {
  children: PropTypes.any
};

export default Sample;
