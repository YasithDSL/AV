import ButtonAppBar from './AppBar.js'
import PathfindingIndex from './PathfindingIndex.js'

function App() {
  return (
    <div className="App">
      <header>
      <ButtonAppBar title = "Algorithm Visualiser"/>
      </header>
      <PathfindingIndex />
    </div>
  );
}

export default App;
