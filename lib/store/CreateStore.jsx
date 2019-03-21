import React, { useReducer } from "react";
import errors from '../errors';
const context = React.createContext();

/**
 *
 * @param {object} initialState
 * @param {callback} reducers - 引数(state, action)を持つ関数を渡す
 * @returns {context, reducers, initialState} - ProviderやConnectに必要な情報を提供する。
 */
const useCreateStore = (initialState, reducers) => {
  if ( initialState == null ) {
    throw errors['create_redux_args_one_not_found']
  }
  if ( reducers == null ) {
    throw errors['create_redux_args_two_not_found']
  }
  return { context, reducers, initialState };
};

export default useCreateStore;
