import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './routes/App';
import store from './utils/data';
import { setHoverAvaliable } from './actions';

window.onresize = () => {
  const avaliable = window.matchMedia('(hover:hover)').matches;
  store.dispatch(setHoverAvaliable(avaliable));
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'),
);
