import React, { useEffect } from 'react';
import { useContext } from 'react';
import { Store } from '~/store/';
import * as Actions from '~/store/actions';

export const SAMPLE_ACTION = 'SAMPLE_ACTION';

const Sample = () => {
  const { state, dispatch } = useContext(Store);
  const increment = () => {
    dispatch(Actions.increment());
  };
  const decrement = () => {
    dispatch(Actions.decrement());
  };

  return (
    <>
      count : {state.count}
      <div>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
      </div>
    </>
  );
};

export default Sample;
