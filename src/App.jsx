import React, { useState } from 'react';
import Navbar from './Components/Navbar.jsx'; 
import './App.css';
import NewsBoard from './Components/NewsBoard.jsx';

function App() {
  const [category, setCategory] = useState("general");

  return (
    <div className="App">
      <Navbar setCategory={setCategory} />    
      <NewsBoard category={category} />
    </div>
  );
}

export default App;
