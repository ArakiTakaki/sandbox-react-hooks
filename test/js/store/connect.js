
import React, { useReducer } from 'react';
import reducers, {registerMiddleware} from  './reducers';
import initialState from './initialState';

const Connect = Component =>  props => {
  const [state, dispatch] = useReducer(reducers, initialState);
  return (
    <Component store={state} dispatch={dispatch} {...props} />
  );
};

export default Connect;
