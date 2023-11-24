import React, { useState } from 'react';
import Popular from './Popular';
import Search from './Search';

const Home = (props) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInput = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className='container '>
      <div >
        <input  
          type="text"
          name="search"
         className='w-100 p-2 m-2'
          onChange={(e) => handleInput(e)}
          placeholder="Start typing to show results..."
        />
      </div>
      {searchTerm.length === 0 ? <Popular {...props} /> : <Search searchTerm={searchTerm} />}
    </div>
  );
};

export default Home;
