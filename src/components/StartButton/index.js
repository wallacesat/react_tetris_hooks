import React from 'react';

import { StyleStartButton } from './styles';

const StartButton = ({ callback }) => {
  return <StyleStartButton onClick={callback}>Start Game</StyleStartButton>;
};

export default StartButton;
