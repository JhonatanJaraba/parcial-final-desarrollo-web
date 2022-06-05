import React from 'react';
import './App.css';
import Cards from './components/cards';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='container p-6'>
      <div className='row'>
        <Cards/>
      </div>
      <ToastContainer/>
      
    </div>
  );
}

export default App;
