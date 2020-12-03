import React from 'react';
import BannerContent from '../BannerContent';
import Header from '../Header';
import SectionTopLeft from '../SectionTopLeft';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="top-banner">
        <Header />
        <BannerContent />
      </div>
      <div className="main-container">
        <SectionTopLeft />
      </div>

    </div>
  );
}

export default App;
