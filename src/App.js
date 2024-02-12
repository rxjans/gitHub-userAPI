import React from 'react';
import Cards from './components/cards';
import Nav from './components/nav';

function App() {
  return(
    <div className=' bg-[url("https://transparenttextures.com/patterns/crissxcross.png")] h-screen'>
      <Nav />
      <div className='grid grid-cols-3 mt-10 '>
        <Cards />
      </div>
    </div>
  );
}

export default App;
