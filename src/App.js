import React from 'react';
import './App.css';
import Header from './components/header';
import Banner from './components/banner';
import Services from './components/services';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
