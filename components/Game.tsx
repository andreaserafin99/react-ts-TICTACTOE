import React, { FC, useRef, useState } from 'react';
import Board from './Board';

interface GameProps {}
const Game: FC<GameProps> = () => {
  let [winner, setWinner] = useState<boolean>(false);
  const ExtFunction = useRef(null);

  function callReset() {
    ExtFunction.current.resetSquare();
  }

  function isWinner() {
    if (winner) {
      console.log(winner);
      return (
        <div>
          <div>
            <p>HAI VINTO! XDXD</p>
          </div>
          <div>
            <button
              onClick={() => {
                callReset();
                setWinner(!winner);
              }}
              className="btn btn-success"
            >
              RESTART
            </button>
          </div>
        </div>
      );
    } else {
      console.log('NOT YET');
    }
  }

  isWinner();
  return (
    <div className="game">
      <div className="game-board">
        {
          <Board
            onChange={() => {
              setWinner(!winner);
            }}
            ref={ExtFunction}
          />
        }
      </div>
      <div className="game-info">{isWinner()}</div>
    </div>
  );
};

export default Game;
