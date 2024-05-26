import React, { Component } from 'react';
import '../styles/leaderboardPage.css'
import config from './responce';
import axios from 'axios';

class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    this.fetchUsers();
  }

  async fetchUsers() {
    try {
      const response = await axios.get(config.getTopUsers());
      const users = response.data
      this.setState({ users });
    } catch (error) {
      console.error('Failed to fetch users', error);
    }
  }

  render() {
    return (
      <div className='leaderboardBox'>
        <h1 className='leaderboardText'>Рейтинг волонтеров</h1>
        <div className='leaderboard'>
            <div className='player'>
                <div id='playerNumber'>Номер</div>
                <div id='playerWalletNumber'>Кошелек</div>
                <div id='playerBalance'>Очки</div>
            </div>
            {this.state.users.map((user, index) => (
                <div key={index} className='player'>
                    <div id='playerNumber'>{index + 1}</div>
                    <div id='playerWalletNumber'>{user.user_id}</div>
                    <div id='playerBalance'>{user.score}</div>
                </div>
            ))}
        </div>
      </div>
    );
  }
}

export default Leaderboard;