import React, { useReducer } from 'react';
import initialState from './initialState';
import reducers, {registerMiddleware} from  './reducers';
import logger from './lib/logger';

const Store = React.createContext();
registerMiddleware(logger)

export { Store };
