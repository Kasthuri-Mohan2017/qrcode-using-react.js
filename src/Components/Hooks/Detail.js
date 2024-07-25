// src/components/Detail.js
import React from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams();

  return (
    <div className="detail">
      <h1>Detail Page</h1>
      <p>Detail for item ID: {id}</p>
    </div>
  );
}

export default Detail;
