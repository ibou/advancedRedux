import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxPromise from 'redux-promise';
import reducers from 'reducers';

export default ({ children, initialState = {} }) => {

  const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(
      applyMiddleware(reduxPromise)
    )
  );

  return <Provider store={store}>{children}</Provider>;
};
