import logo from './Silpakorn_University_Logo_02.png';
import './App.css'; 
import Hello from './hello';
import GooBYe from './GoodBye';
import JsxExample from './components/jsxexample.jsx';
function App() {
  return (
    <div className="App">
      <Hello/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          660710765<code>Prabda Pleannuam</code> 8888
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
      </header>
      <GooBYe/>
      <JsxExample/>
    </div>
  );
}

export default App;
