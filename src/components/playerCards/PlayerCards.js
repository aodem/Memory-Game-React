import React from 'react';
import './Cards.css';


class PlayerCards extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hasBeenClicked: 0
    }

    this.updateClick = this.updateClick.bind(this)
  }

  updateClick(){
    this.setState({hasBeenClicked: this.state.hasBeenClicked + 1})
    this.props.onCharacterClick()
  }
  
  render(props){
    return (
      <div className="col-3">
        <img
          src={process.env.PUBLIC_URL + this.props.image}
          className="card-img-top Avatar"
          alt="character"
          hasBeenClicked={this.state.hasBeenClicked}
          onClick={
            (this.state.hasBeenClicked === 0) ? 
            this.updateClick: 
            () => this.props.handleMiss() 
          }
        />
      </div>
    );    
  } 
}


export default PlayerCards; 