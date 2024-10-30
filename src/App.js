import { useState } from 'react';
import './App.css';
import PortfolioPage from './PortfolioPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">Welcome to My Portfolio</h1>
              <p className="App-description">
                Crafting experiences with elegance and attention to detail.
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
