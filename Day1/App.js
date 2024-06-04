import logo from './logo.svg';
import './App.css';
import One from "./components/One";
import ClassCom from './components/class_com';
import New from './TwoCompo';
import SetButton from './SetButton';
import FunHook from './FunctionHook';
import HookName from './HookName';
import Frag_bind from './Frag_bind';

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
        <ClassCom />
        <New name="Harish" age='21'/>
        <SetButton />
        <FunHook />
        <HookName firstname="Harish" lastname="Raju"/> */}
        <Frag_bind />
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
