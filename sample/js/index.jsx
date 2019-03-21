import React from "react";
import ReactDOM from "react-dom";
import Sample from "./component/Sample";
import Store from "./store/index";
import { Provider } from "../../lib/index";

ReactDOM.render(
  <div>
    <Provider store={Store}>
      <Sample />
      <Sample />
    </Provider>
  </div>,
  document.getElementById("app")
);
