// PortfolioPage.js
import './App.css';

function PortfolioPage({ onBack }) {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">My Projects</h1>
        <p className="App-description">
          Here’s a collection of my favorite work.
        </p>
        <button className="App-button" onClick={onBack}>
          Go Back Home
        </button>
      </header>
    </div>
  );
}

export default PortfolioPage;
