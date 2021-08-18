import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './redux/rootRaducer';
import { App } from './App';

const store = createStore(rootReducer, applyMiddleware(thunk));

export const InitionalApp: React.FC = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
