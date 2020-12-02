import React from 'react';
import BannerContent from '../BannerContent';
import Header from '../Header';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="top-banner">
        <Header />
        <BannerContent />
      </div>

    </div>
  );
}

export default App;
