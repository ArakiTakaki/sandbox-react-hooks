import { CreateStore } from '../../../lib';
import reducers from './reducers';
import initialState from './initialState';
import logger from './lib/logger';
import {registerMiddleware} from './reducers';
registerMiddleware(logger);

export default CreateStore(initialState, reducers);
