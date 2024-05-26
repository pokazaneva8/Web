import React from 'react';
import { ConnectButton } from '../components/TON/TonConnectButton';
import coinLogo from '../images/coin.png';
import { ReactComponent as Logo } from '../images/notification.svg';
import axios from 'axios';
import config from './responce';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score: null,
        };
        this.incrementScore = this.incrementScore.bind(this);
    }

    componentDidMount() {
        this.fetchScore();
    }

    async fetchScore() {
        try {
            const response = await axios.get(config.getScore(), {
                params: {
                    user_id: config.userId,
                },
            });
            this.setState({ score: response.data.score });
        } catch (error) {
            console.error('Failed to fetch score', error);
        }
    }

    incrementScore() {
      this.setState(prevState => ({ score: prevState.score + 1 }));
    } 

    render() {
        const { showNotification } = this.props;
        const { score } = this.state;

        return (
            <header>
                <div id="coin">
                    <img src={coinLogo} alt="Coin" width="40" height="40" vspace="0" hspace="5" />
                    <span className="balance">{score !== null ? score : 'Loading...'}</span>
                </div>
                <ConnectButton />
                <div>
                    <Logo className="notification" alt="Уведомление" width="45" height="50" onClick={showNotification} />
                </div>
            </header>
        );
    }
}

export default Header;
