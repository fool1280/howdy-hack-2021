import logo from './logo.svg';
import './App.css';

import GetRequest  from './components/GetRequest.js';
import EmbedSpotify from './components/EmbedSpotify';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        < GetRequest />
        <EmbedSpotify />
      </header>
    </div>
  );
}

export default App;