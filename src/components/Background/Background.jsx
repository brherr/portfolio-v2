import React from 'react';
import { CardMedia } from '@mui/material';
import { BackgroundWrapper, Background } from './styles';

const BackgroundImage = ({ backgroundImage }) => {
  return (
    <BackgroundWrapper>
      <CardMedia component={Background} backgroundImage={backgroundImage} />
    </BackgroundWrapper>
  );
};

export default BackgroundImage;
