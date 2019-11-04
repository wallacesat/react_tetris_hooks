import React from 'react';

import { StyleStartButton } from './styles';

export default function StartButton({ callback }) {
  return <StyleStartButton onClick={callback}>Start Game</StyleStartButton>;
}
