import React from 'react';
import Header from './components/Header';
import NewsList from './components/NewsList';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <NewsList />
      <Footer />
    </div>
  );
}

export default App;
