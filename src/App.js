import React from 'react';
import './App.scss';
import FinansPanel from './components/finansPanel'
import CircleDiogram from './components/CircleDiogram';
import LineDoigram from './components/LineDiogram';

function App() {
  return (
    <div className="App">
      <FinansPanel/>
      <div className='grahics'>
      <CircleDiogram/>
      <LineDoigram/>
      </div>
    </div>
  );
}

export default App;
