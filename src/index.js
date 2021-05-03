import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import getAppStore from './redux/store/ConfigureStore'
import {getAllTenants} from './redux/actions/TenantActions';

const store = getAppStore();
const template = (
  <Provider store={store}>
      <App />
  </Provider>
);

store.dispatch(getAllTenants()).then(() => {
  ReactDOM.render(template, document.getElementById('root'));
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
