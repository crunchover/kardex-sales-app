import React from 'react';
import '../src/components/styles/Main.css';
import Header from '../src/components/header';
import Footer from '../src/components/footer';
import MainContain from '../src/components/mainContent';

function App() {
  return (
    <div className="container">
      <Header />
      <MainContain />
      <Footer />
    </div>
  );
}

export default App;
