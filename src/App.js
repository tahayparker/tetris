import React from 'react';
import Tetris from './components/Tetris';
import { inject } from '@vercel/analytics';

const App = () => (
  <div className="App">
    <Tetris />
  </div>
);

inject();

export default App;
