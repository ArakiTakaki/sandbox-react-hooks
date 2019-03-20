
import React from 'react';
import { useContext } from 'react';
import { Store } from '~/store/';

const Connect = Component => {
  return props => {
    const { state, dispatch } = useContext(Store);
    return <Component store={state} dispatch={dispatch} {...props} />
  };
  // return (
  //   <Component store={state} dispatch={dispatch} />
  // );
};

export default Connect;
