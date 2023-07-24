// App.js
import React, { useState } from 'react';
import TrickList from '../TrickList';
import Form from '../Form';
import { postTrick } from '../api'; 

import './App.css';

function App() {
  const [tricks, setTricks] = useState([]);
  const [error, setError] = useState(null);

  const handleAddTrick = async (newTrick) => {
    try {
      const response = await postTrick(newTrick);
      console.log('Successfully added new trick:', response);
      setTricks((prevTricks) => [...prevTricks, response]);
      setError(null); 
    } catch (error) {
      console.error('Error adding new trick:', error);
      setError('Failed to add new trick. Please try again later.');
    }
  };

  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <Form onAddTrick={handleAddTrick} />
      {error && <p className="error">{error}</p>} 
      <TrickList tricks={tricks} />
    </div>
  );
}

export default App;
