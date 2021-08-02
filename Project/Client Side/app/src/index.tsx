import React from 'react';
import ReactDOM from 'react-dom';
import './SASS/default.sass'
import App from './App';
import reportWebVitals from './reportWebVitals'; 
import Store from './Redux/Store'
import { Provider } from 'react-redux'

  
  ReactDOM.render(
    <React.StrictMode>
        <Provider store={Store}> 
              <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
  reportWebVitals();