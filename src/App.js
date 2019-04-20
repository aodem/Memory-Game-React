import React, { Component } from 'react';
// import './App.css';
import GamecardContainer from './components/cardContainer/GamecardContainer';
import PlayerCards from './components/playerCards/PlayerCards'
import Appbar from './components/appbar/Appbar';
import characters from './components/cardContainer/character.json'
const _ = require('lodash')


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      misses: 0,
    };

    this.handleHasBeenClicked = this.handleHasBeenClicked.bind(this);
    this.missIterator = this.missIterator.bind(this);
  }

  handleHasBeenClicked() {
    this.setState({ score: this.state.score + 1 });
  }

  missIterator(){
    this.setState({ misses: this.state.misses + 1 });
  }

  render() {
    return (
      <div className="App">
        <Appbar score={this.state.score} misses={this.state.misses} />
        <GamecardContainer>
          {_.shuffle(characters).map(character => (
            <PlayerCards
              {...character}
              key={character.id}
              onCharacterClick={this.handleHasBeenClicked}
              handleMiss={this.missIterator}
              // hasBeenClicked={this.state.hasBeenClicked}
            />
          ))}
        </GamecardContainer>
      </div>
    );
  }
}

export default App;
