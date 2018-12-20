import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from './store/';
import Sample from './component/Sample';

ReactDOM.render(
  <div>
    <Provider>
      <Sample />
    </Provider>
  </div>,
  document.getElementById('app')
);
