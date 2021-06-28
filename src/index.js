import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './routes/App';
import data from './db/data.json';

const loadState = () => {

  const { initialState } = data;
  initialState.user = {};
  initialState.playing = {};

  try {
    const localState = sessionStorage.getItem('state');

    if (localState === null) {
      return initialState;
    }

    return JSON.parse(localState);

  } catch (error) {
    console.log('error');
    return initialState;
  }
};

const saveState = (state) => {
  try {
    const newState = JSON.stringify(state);
    sessionStorage.setItem('state', newState);
  } catch (error) {

  }
};

const store = createStore(reducer, loadState());

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'),
);
