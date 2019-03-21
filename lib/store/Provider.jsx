import React, { useReducer } from 'react';
import errors from '../errors';

const Provider = ({children, store}) => {
  if (store == null){
    throw errors['provider_props_store_not_found'];
  }
  const {context, initialState, reducers} = store;
  const [state, dispatch] = useReducer(reducers, initialState);
  return <context.Provider value={{ state, dispatch }} > {children} </context.Provider>;
}

export default Provider;