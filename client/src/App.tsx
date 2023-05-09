import React, {useContext, useEffect} from 'react';
import crud from './service/crud';
import { EmailContext } from './store/AuthContext';
import { GlobalContent } from './interfaces/interface';
import './App.css';

function App() {
  const emailContext = useContext<GlobalContent>(EmailContext);
  const {email} = emailContext;

  async function getBackend(){
    let objSearch = {kind:'Teste', route: '/get_test'};
    const getData = await crud.get(objSearch, {email, name:'Blasius', age:39});
    console.log(getData);
  }

  async function postBackend(){
    let objSearch = {kind:'Teste', route: '/Patient/create_new_patient'};
    const postData = await crud.post(objSearch, {email, car:'Gol', color:'white'});
    console.log(postData);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Front iniciado !
        </h1>

        <button onClick={()=> getBackend()}> TESTE GET</button>
        <button onClick={()=> postBackend()}> TESTE POST</button>
      </header>
    </div>
  );
}

export default App;
