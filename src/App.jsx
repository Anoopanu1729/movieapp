import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import './index.css';
import Details from './components/Details';

function App() {
  return (
    <div className='w-full flex justify-center'>
      <div className='max-w-[1100px] '>
        <div className='text-4xl text-center py-3'> The Movie Database </div>
          <Routes>
            <Route path="/" element={<Home term={''} />} />
            <Route path="/details/:id" element={<Details />} />

          </Routes>
      </div>
    </div>
  );
}

export default App;
