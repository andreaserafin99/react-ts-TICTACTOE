import React, { Component } from 'react';
import { render } from 'react-dom';
import Game from './components/Game';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

interface AppProps {}
interface AppState {}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Game />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
