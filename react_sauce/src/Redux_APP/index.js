import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore } from "redux";
import Counter from "./components/Counter";
import CounterReducer from "./reducers/Counter";
import * as serviceWorker from "../serviceWorker";

const store = createStore(CounterReducer);

const render = () => 
  ReactDOM.render(
    <Counter
      value={store.getState()}
      increment={() => store.dispatch({ type: "INCREMENT" })}
      decrement={() => store.dispatch({ type: "DECREMENT" })}
    />,
    document.getElementById("root")
  );


render();
store.subscribe(render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
