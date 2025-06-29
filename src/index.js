import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '@syncfusion/ej2-base/styles/bootstrap5.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import reportWebVitals from './reportWebVitals';



import { registerLicense } from '@syncfusion/ej2-base';
registerLicense('Ngo9BigBOggjHTQxAR8/V1NNaF1cWWhOYVF3WmFZfVtgdV9FY1ZUQ2YuP1ZhSXxWdkNhWH9fdHVQRWdZVkZ9XUs=');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
