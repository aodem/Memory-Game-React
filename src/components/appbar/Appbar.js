import React from 'react';
import './appbar.css';


function Appbar(props){

  // render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-text appbar">Memory Game</span>
        <span className="appbar">
          <p>
            Misses:{props.misses} || SCORE:{props.score}
          </p>
        </span>
      </nav>
    );
  //}
}

export default Appbar;