import React from 'react';
import BannerContent from '../BannerContent';
import Header from '../Header';
import SectionTopLeft from '../SectionTopLeft';
import SectionTopRight from '../SectionTopRight';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="top-banner">
        <Header />
        <BannerContent />
      </div>
      <div className="main-container">
        <div className="flex-1">
          <SectionTopLeft />
        </div>
        <div className="flex-1">
          <SectionTopRight />
        </div>
      </div>

    </div>
  );
}

export default App;
