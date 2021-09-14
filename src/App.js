import logo from './logo.svg';
import './App.css';
import DisplayDiv from './components/DisplayDiv';
import WriteDiv from './components/WriteDiv';

function App() {
  return (
    <div className="mainContainer">
      <WriteDiv/>
      <DisplayDiv/>

    </div>
  );
}

export default App;
