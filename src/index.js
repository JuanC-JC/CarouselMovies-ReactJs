import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './routes/App';
import store from './utils/data';
import { setHoverAvaliable } from './actions';

//siempre que halla se evalua si el el

window.onload = () => {
  const avaliable = window.matchMedia('(hover:hover)').matches;
  store.dispatch(setHoverAvaliable(avaliable));
};

window.onresize = () => {
  console.log('resize', window.matchMedia('(hover:hover)').matches);
  const avaliable = window.matchMedia('(hover:hover)').matches;
  store.dispatch(setHoverAvaliable(avaliable));
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'),
);
