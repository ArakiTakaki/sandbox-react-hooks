
import React, { useContext } from 'react';
import {Store} from './index';

const Connect = Component =>  props => {
  const {state, dispatch} = useContext(Store);
  return (
    <Component store={state} sample={useContext(Store)} dispatch={dispatch} {...props} />
  );
};

export default Connect;
