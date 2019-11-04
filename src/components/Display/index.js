import React from 'react';

import { StyledDisplay } from './styles';

export default function Display({ gameOver, text }) {
  return <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>;
}
