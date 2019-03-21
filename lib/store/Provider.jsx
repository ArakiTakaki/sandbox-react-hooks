import React, { useReducer } from 'react';

const Provider = ({children, store}) => {
  const {context, initialState, reducers} = store;
  const [state, dispatch] = useReducer(reducers, initialState);
  return <context.Provider value={{ state, dispatch }} > {children} </context.Provider>;
}

export default Provider;