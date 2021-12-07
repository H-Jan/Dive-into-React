// import React from 'react';
import logo from './logo.svg';
import POPOSList from './POPOSList/POPOSList';
import { Outlet } from 'react-router-dom'
import './App.css';
import Title from './Title/Title';


function App() {
  return (
    <div>
      <Title />
      <Outlet />
    </div>
  );
}

export default App;
