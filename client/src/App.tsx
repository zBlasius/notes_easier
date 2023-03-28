import React from 'react';
import crud from './service/crud';
import './App.css';


function App() {

  async function getBackend(){
    let objSearch = {kind:'Teste', route: '/get_test'}
    const getData = await crud.get(objSearch, {name:'Blasius', age:39});
    console.log(getData);
  }

  async function postBacken(){
    let objSearch = {kind:'Teste', route: '/post_test'}
    const postData = await crud.post(objSearch, {car:'Gol', color:'white'});
    console.log(postData);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Front iniciado !
        </h1>

        <button onClick={()=> getBackend()}> TESTE GET</button>
        <button onClick={()=> postBacken()}> TESTE POST</button>
      </header>
    </div>
  );
}

export default App;
