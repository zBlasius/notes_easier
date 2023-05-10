import ReactDOM from 'react-dom/client';

import App from './App';
import Auth from './pages/Auth'
import { EmailProvider } from './store/AuthContext';

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
