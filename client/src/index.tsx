import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import Auth from './auth/Auth'
import { EmailProvider } from './store/AuthContext';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <EmailProvider>
    <Auth>
      <App/>
    </Auth>
  </EmailProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
