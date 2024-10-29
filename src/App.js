import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import PortfolioPage from './PortfolioPage';

function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to My Portfolio</h1>
        <p className="App-description">
          Crafting experiences with elegance and attention to detail.
        </p>
        <Link to="/portfolio" className="App-link">
          Explore My Work
        </Link>
      </header>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </Router>
  );
}

export default App;
