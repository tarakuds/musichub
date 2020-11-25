import logo from './logo.svg';
import './App.css';

//import axios from 'axios'

function App() {
  const Key='1638fe563a3c3038628e2462ec04af8a'
  const API_URL='https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=5&country=us&f_has_lyrics=1?format=json&apikey='+Key

  //axios.get(API_URL).then()

  return (
    <div className="App">
      <h1>MUSIC LIBRARY </h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Tara</h1>
        <p>
          this is <code>Tara.com/me</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          TARA SAY SO
        </a>
      </header>

      <footer>Powered by: <a href="www.musixmatch.com">MusixMatch</a></footer>
    </div>
  );
}

export default App;
