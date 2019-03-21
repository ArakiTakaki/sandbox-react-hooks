import React from 'react';
import { useContext } from 'react';

// TODO: 他にもデコレートしたい感じはある。
const Connect = ({context}) => Component => props => {
  const { state, dispatch } = useContext(context);
  return <Component store={state} dispatch={dispatch} {...props} />
};

export default Connect;
