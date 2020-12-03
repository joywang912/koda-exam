import React from 'react';
import BannerContent from '../BannerContent';
import Categories from '../Categories';
import Header from '../Header';
import SectionTopLeft from '../SectionTopLeft';
import SectionTopRight from '../SectionTopRight';
import SectionMid from '../SectionMid';
import './App.scss';
import Gallery from '../Gallery';
import Team from '../Team';
import Footer from '../Footer';
import Banner from '../Banner';

function App() {
  return (
    <div className="App">

      <div className="top-banner">
        <Banner />
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
      <Categories />
      <div className="main-container">
        <div className="flex-1">
          <SectionMid />
        </div>
        <div className="flex-1">
          <SectionMid />
        </div>
      </div>
      <Gallery />
      <div className="main-container">
        <div className="flex-1">
          <Team />
        </div>
      </div>
      <div className="main-container">
        <div className="flex-1">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
