import { useState } from 'react';
import './App.css';
import PortfolioPage from './PortfolioPage';
import logo from './logo.svg';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div className="App">
            <img src={logo} alt="Logo" className="App-logo" />
            <header className="App-header">
              <h1 className="App-title">Welcome to My Portfolio</h1>
              <p className="App-description">
                Leah Kim
              </p>
              <button className="App-button" onClick={() => setCurrentPage('portfolio')}>
                Explore My Work
              </button>
            </header>
          </div>
        );
      case 'portfolio':
        return <PortfolioPage onBack={() => setCurrentPage('home')} />;
      default:
        return null;
    }
  };

  return <div>{renderContent()}</div>;
}

export default App;
