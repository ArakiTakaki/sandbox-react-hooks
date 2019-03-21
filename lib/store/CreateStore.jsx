import React, { useReducer } from "react";
const context = React.createContext();

const useCreateStore = (reducers, initialState) => {
  return { context, reducers, initialState };
};

export default useCreateStore;
