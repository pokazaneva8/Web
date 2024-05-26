import React from 'react';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import Leaderboard from './components/LeaderboardPage.js';
import { NavigationPanel } from './components/NavigationPanel.js';
import Header from './components/Header.js';
import MainContent from './components/MainContent.js';
import ShopPage from './components/ShopPage.js';
import TaskPage from './components/TaskPage.js';
import NotificationPage from './components/NotificationPage.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: null,
      showMainContent: true
    };

    this.showMainPage = this.showMainPage.bind(this);
    this.showTaskPage = this.showTaskPage.bind(this);
    this.showShopPage = this.showShopPage.bind(this);
    this.showLeaderboardPage = this.showLeaderboardPage.bind(this);
    this.showNotificationPage = this.showNotificationPage.bind(this);
    this.updateScore = this.updateScore.bind(this);
    this.incrementScoreRef = React.createRef();
  }

  showMainPage() {
    this.setState({
      content: null,
      showMainContent: true
    });
  }

  showTaskPage() {
    this.setState({
      content:(
        <TaskPage
        />
      ),
      showMainContent: false
    });
  };

  showShopPage() {
    this.setState({
      content: (
        <ShopPage />
      ),
      showMainContent: false
    });
  }  

  showLeaderboardPage() {
    this.setState({
      content: (
        <Leaderboard />
      ),
      showMainContent: false
    });
  }

  showNotificationPage() {
    this.setState({
      content: (
        <NotificationPage/>
      ),
      showMainContent: false
    });
  }

  updateScore() {
    if (this.incrementScoreRef.current) {
        this.incrementScoreRef.current.incrementScore();
    }
  }

  render() {
    const {content, showMainContent} = this.state;
    return (
      <TonConnectUIProvider manifestUrl="https://raw.githubusercontent.com/MajeFlz/WEBAPP/main/tonconnect-manifest.json">
        <div>
            <Header
              ref={this.incrementScoreRef}
              showNotification={this.showNotificationPage}
            />
            <main> 
              {showMainContent && (
                <MainContent 
                  updateScore={this.updateScore}
                />   
              )}
              {content}
            </main>
          
          <NavigationPanel 
            showMain={this.showMainPage} 
            showTasks={this.showTaskPage} 
            showPay={this.showShopPage} 
            showTop={this.showLeaderboardPage} 
          />

        </div>
      </TonConnectUIProvider>
    );
  }
}

export default App;