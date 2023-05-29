import React from 'react';
import './app.scss';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import SearchPatient from './pages/SearchPatient';

export default function App() {

  return ( //!Blasius - criar esquema de rota
    <div className="App">
      <SearchPatient/>
    </div>
  );
}
