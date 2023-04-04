import { useState } from 'react'
import './App.css'
import Register from './Components/Register';
import Login from './Components/Login';
import Home from './Components/Home';

function App() {

  if(localStorage.getItem('pocketbase_auth') === null){
    return <Login/>;

  }else if(localStorage.getItem('pocketbase_auth') !== null){
    return <Home/>;
  }

  return (
    <div className="App">
    </div>
  )
}

export default App
