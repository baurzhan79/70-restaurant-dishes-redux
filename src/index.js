import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import dishesReducer from "./store/reducers/dishesReducer";
import cartReducer from './store/reducers/cartReducer';
import ordersReducer from './store/reducers/ordersReducer';

const rootReducer = combineReducers({
  dishes: dishesReducer,
  cart: cartReducer,
  orders: ordersReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore({
  reducer: rootReducer
}, composeEnhancers(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
