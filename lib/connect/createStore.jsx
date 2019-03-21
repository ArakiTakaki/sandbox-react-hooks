import React, { useReducer } from 'react';

const Store = React.createContext()
const Provider = ({children}) => {
  const [state, dispatch] = useReducer(reducers, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
}

export {Store, Provider}