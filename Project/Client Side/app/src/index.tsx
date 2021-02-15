import React from 'react';
import ReactDOM from 'react-dom';
import './SASS/default.sass'
import App from './App';
import reportWebVitals from './reportWebVitals'; 
import Store from './Redux/Store'
import { Provider } from 'react-redux'

// import { State } from './Types/types'
// import './index.css';
// interface RenderInt{ 
//   render : (props : {}) => void
// }

  
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={Store}>
          <App/>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
  reportWebVitals();