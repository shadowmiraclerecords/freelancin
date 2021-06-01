// import logo from './logo.svg';
import logos from './new.svg';
import backing from './backing.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="first" style={{ backgroundImage: `url(${backing})` }}>
        <div className="top">
          <img src={logos} className="logos" alt="logos" />
          {/* <div className="logos"></div> */}
          <a href="tel:123-456-7890" className="click">
            <div className="phone">CALL NOW</div>
          </a>
        </div>
        <div className="store">EUROMITA Tile & Stone</div>
        {/* <a href="tel:123-456-7890">CLICK TO CALL</a>
        <a href="mailto:john@example.com">Contact</a> */}
      </div>
      <div className="cards">
        <div className="title">What We Do</div>
      </div>
      <div className="cards">
        <div className="title">Previous Projects</div>
      </div>
      <div className="cards">
        <div className="title">Contact Us</div>
        <a href="mailto:john@example.com" className="title">Contact</a>
      </div>
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/* <a href="tel:123-456-7890">CLICK TO CALL</a>
        <a href="mailto:john@example.com">Contact</a> */}
      {/* </header> */}
    </div>
  );
}

export default App;
