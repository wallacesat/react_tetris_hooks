import React, { useState } from 'react';

import { createStage } from '../../matriz';

import { usePlayer } from '../../hooks/usePlayer';
import { useStage } from '../../hooks/useStage';

import Stage from '../Stage';
import Display from '../Display';
import StartButton from '../StartButton';

import { StyledTetrisWrapper, StyledTetris } from './styles';

export default function Tetris() {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer] = usePlayer();
  const [stage, setStage] = useStage(player);

  function movePlayer(dir) {
    updatePlayerPos({ x: dir, y: 0 });
  }

  function startGame() {
    setStage(createStage());
    resetPlayer();
  }

  function drop() {
    updatePlayerPos({ x: 0, y: 1, collided: false });
  }

  function dropPlayer() {
    drop();
  }

  function move({ keyCode }) {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1);
      }
      if (keyCode === 39) {
        movePlayer(1);
      }
      if (keyCode === 40) {
        dropPlayer();
      }
    }
  }

  return (
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text="Score" />
              <Display text="Rows" />
              <Display text="Level" />
            </div>
          )}
          <StartButton callback={startGame} />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
}
