import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './router/AppRouter';
import './firebase/firebase';
import './index.css';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();