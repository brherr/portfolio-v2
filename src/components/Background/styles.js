import { styled } from '@mui/material/styles';

export const BackgroundWrapper = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%'
});

export const Background = styled('div')(({ backgroundImage }) => ({
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  opacity: 0.7
}));
