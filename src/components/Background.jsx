import React from 'react';
import { CardMedia } from '@mui/material';

const Background = () => {
  const vidSource = 'src/assets/bg-vid-1.mp4';
  return <CardMedia component="video" src={vidSource} autoPlay loop />;
};

export default Background;
