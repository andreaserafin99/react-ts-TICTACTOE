import React, { FC, forwardRef, useImperativeHandle, useState } from 'react';
import Square from './Square';

interface BoardProps {}
interface BoardState {}

function Board<BoardProps, BoardState>(props, ref) {
  let [squares, setSquares] = useState(Array(9).fill(null));
  let [isXTurn, setIsXTurn] = useState<boolean>(true);
  let [disable, setDisable] = useState<boolean>(false)

  function handleOnClick(i) {
    const currentSquares = squares.slice();
    if (currentSquares[i] == null) {
      if (isXTurn) {
        currentSquares[i] = 'X';
      } else {
        currentSquares[i] = 'O';
      }
      setSquares((squares = currentSquares));
      if (calculateWinner(squares) != null) {
        // console.log(isXTurn ? 'X' : 'O' +'WINNER');
        console.log('WINNER');
        setDisable(!disable);
        props.onChange();
        return;
      }
      setIsXTurn(!isXTurn);
    }
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  useImperativeHandle(ref, () => ({
    resetSquare() {
      setSquares(squares.fill(null));
      console.log(squares);
      setDisable(!disable);
    }
  }));

  function renderSquare(i) {
    return (
      <Square
        value={squares[i]}
        onClick={() => {
          handleOnClick(i);
        }}
        isDisable={disable}
      />
    );
  }

  let status = 'Current player: ' + (isXTurn ? 'X' : 'O') + '';

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default forwardRef(Board);
