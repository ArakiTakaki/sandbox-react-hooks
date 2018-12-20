import { useContext } from 'react';
import { Store } from '../store/';
import * as Actions from '../store/actions';

import React from 'react';

const Sample = () => {
  const { state, dispatch } = useContext(Store);
  return (
    <>
      count : {state.count}
      <div>
        <button onClick={() => dispatch(Actions.increment())}>increment</button>
        <button onClick={() => dispatch(Actions.decrement())}>decrement</button>
      </div>
    </>
  );
};

export default Sample;
