import { CreateStore } from '../../../lib';
import reducers from './reducers';
import initialState from './initialState';

export default CreateStore(initialState, reducers);
