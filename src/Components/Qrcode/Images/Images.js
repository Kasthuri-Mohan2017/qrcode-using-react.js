// App.js
import React, { useEffect, useState } from 'react';
import { Box, CircularProgress } from '@mui/material';

const Images = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/image')
      .then(response => response.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob);
        setImageSrc(url);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching image:', error));
  }, []);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f0f0f0"
    >
      {loading ? (
        <CircularProgress />
      ) : (
        <img src={imageSrc}/>
      )}
    </Box>
  );
};

export default Images;
