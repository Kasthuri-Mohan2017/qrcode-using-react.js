// src/components/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Hooks() {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate('/detail/1'); // Example ID
  };

  return (
    <div className="home">
      <h1>Home Page</h1>
      <button onClick={goToDetail}>Go to Detail Page</button>
    </div>
  );
}

export default Hooks;
