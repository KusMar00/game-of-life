import './App.css';
import Controls from './components/controls/Controls';
import Info from './components/info/Info';
import Board from './components/board/Board';

function App() {
  return (
    <div className="App">
      <h1>Conways Game of Life</h1>
      <h2>Work in progress... 🏗️</h2>
      <Board/>
      <Controls/>
      <Info/>

    </div>
  );
}

export default App;
