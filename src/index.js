import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './lib/Components/app'
import { Provider } from 'react-redux';
import store from './lib/Redux/store'



//ReactDOM.createRoot(<App />, document.getElementById('root'));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store}>
        <App />
     </Provider>
  </React.StrictMode>
);


/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals(); */
