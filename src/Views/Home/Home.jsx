import React from 'react';
import FireflyBackground from '../../components/FireflyBackground/FireflyBackground';
import Header from '../../components/Header/Header';

const Home = () => {
  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <FireflyBackground quantity="15" />
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%' }}>
        <Header />
      </div>
    </div>
  );
};

export default Home;
