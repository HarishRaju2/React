import logo from './logo.svg';
import './App.css';
import One from "./components/One";
import ClassCom from './components/class_com';
import New from './TwoCompo';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Hii</h1>
        {/* <One />
        <ClassCom /> */}
        <New name="Harish" age='21'/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
