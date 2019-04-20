import React from 'react';
import characters from "./character.json"
import './index.css';

function GamecardContainer (props) {
    console.log(characters);
    
    return (
      <div className="container cardContainer">
        <div className="row justify-content-center">
          {props.children}
        </div>
      </div>
    );
}

export default GamecardContainer;