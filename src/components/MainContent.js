import React from 'react';
import mainLogo from '../images/rostok.png';
import axios from 'axios';
import config from './responce';


class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  async handleButtonClick() {
    try {
      await axios.post(config.incScore(), { 
        user_id: config.userId 
      });
      this.props.updateScore();
    } catch (error) {
      console.error('Failed to increase score:', error);
    }
  }

  render() {
    return (
      <div id="tree">
        <button className="btnTree" onClick={this.handleButtonClick}>
          <img src={mainLogo} alt="Rostok" width="250" height="365"/>
        </button>
      </div>
    );
  }
}

export default MainContent;
