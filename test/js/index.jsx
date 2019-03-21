import React from "react";
import ReactDOM from "react-dom";
import Sample from "./component/Sample";
import { Provider } from "./store";

ReactDOM.render(
  <div>
    <Provider>
      <Sample />
      <Sample />
    </Provider>
  </div>,
  document.getElementById("app")
);
