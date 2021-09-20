import React, { Component, FC, useState } from 'react';
import { render } from 'react-dom';

interface SquareProps {}
interface SquareState {}

// class Square extends Component<SquareProps, SquareState> {
function Square<SquareProps, SquareState>(prop) {
  return (
    <button
      className="square btn btn-outline-primary"
      onClick={() => {
        prop.onClick();
      }}
      disabled={prop.isDisable}
    >
      {prop.value}
    </button>
  );
}
export default Square;
