import React from 'react';

import { StyledCell } from './styles';

import { TETROMINOS } from '../../matriz/tetrominos';

export default function Cell({ type }) {
  return <StyledCell type={type} color={TETROMINOS[type].color} />;
}
