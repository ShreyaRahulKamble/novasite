// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main style={{ paddingTop: '80px' }}>
        <Home />
      </main>
    </div>
  );
};

export default App;