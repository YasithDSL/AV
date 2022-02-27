import ButtonAppBar from './AppBar.js'
import Paper from '@mui/material/Paper'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';

function App() {

  let navigate = useNavigate();

  return (
    <div className="App">
      <header>
      <ButtonAppBar title = "Algorithm Visualiser" isHome="true"/>
      </header>
      <Paper elevation={0} sx={{ mt: 2, mb: 2, bgcolor: "#20262d"}}>
        <Container sx={{ p: 5, bgcolor: "#121212", color: "#FFFFFF", borderRadius: 2 , border: 1}} align="center">
          <Typography variant="h4" sx={{ mt: 2, mb: 2}}>
          <b>Welcome</b>
          </Typography>
          <Typography variant="h6" sx={{ mt: 2, mb: 2}}>
          Select type of visualisation
          </Typography>
          <Divider style={{ background: 'white'}}/>
          <Button sx={{ p: 2, color: "white"}} id="Pathfinding" onClick={() => { navigate("/pathfinding") }}>Pathfinding</Button>
          <Button sx={{ p: 2, color: "white"}} id="ArraySort" onClick={() => { navigate("/arraysorting") }}>Array Sorting</Button>
          <Divider style={{ background: 'white'}} />
          <Button sx={{ p: 2, color: "white"}} id="AI" onClick={() => { navigate("/detection") }}>AI Prediction</Button>
        </Container>
      </Paper>
    </div>
  );
}



export default App;
