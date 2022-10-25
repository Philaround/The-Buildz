import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  const mockData = { title: "Ride", subtitle: "or die" }
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <Navbar title={mockData.title} subtitle={mockData.subtitle} />
      </nav>
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
