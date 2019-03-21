import { useCreateStore } from '../../../lib';
import reducers from './reducers';
import initialState from './initialState';

export default useCreateStore(reducers, initialState);
