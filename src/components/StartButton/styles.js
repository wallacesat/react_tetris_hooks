import styled from 'styled-components';

export const StyleStartButton = styled.button`
  box-sizing: border-box;
  margin: 0 0 20px 0;
  padding: 20px;
  min-height: 30px;
  width: 100%;
  border-radius: 4px;
  border: 2px #999 solid;
  color: #333;
  background: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  outline: none;
  cursor: pointer;
  font-family: Arial, Helvetica, sans-serif;

  &:hover {
    background: rgba(255, 255, 255, 1);
  }
`;
