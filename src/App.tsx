import React from 'react';
import HomePage from './components/HomePage';
import PicturesProvider from './components/PicturesContext';

const App = () => {
  return (
    <PicturesProvider>
      <HomePage />
    </PicturesProvider>
  );
};

export default App;
