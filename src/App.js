import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';

function App() {
  const mockData = { title: "Ride", subtitle: "or die" }
  return (
    <div className="App">
      <header className="App-header">
       <Banner title={mockData.title} subtitle={mockData.subtitle} />
      </header>
    </div>
  );
}

export default App;
