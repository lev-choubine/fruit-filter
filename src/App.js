import logo from './logo.svg';
import './App.css';
import FruitContainer from './Components/FruitContainer'


function App() {
  const fruits = ['banana', 'watermelon', 'apple', 'orange', 'kiwi', 'starfruit', 'grapefruit', 'crabapple', 'mangosteen']
  return (
    <div className="App">
      <FruitContainer fruits={fruits}/>
    </div>
  );
}

export default App;
