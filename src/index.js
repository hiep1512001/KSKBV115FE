import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '@syncfusion/ej2-base/styles/bootstrap5.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';


import { createStore } from "redux";
import { Provider } from "react-redux";
import { registerLicense } from '@syncfusion/ej2-base';
import appReducer from './reducers';
registerLicense('Ngo9BigBOggjHTQxAR8/V1JFaF5cXGRCf1NpR2FGfV5ycUVCal5RTnNXUiweQnxTdEBjUH1ccHBXR2FfVUR/W0leYg==');
const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
