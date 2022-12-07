import logo from './logo.svg';
import './App.css';
import CharacterCount from "./components/CharacterCount";
import Container from '@mui/material/Container';

const styles = {
  paddingTop: "20px",    
};

function App() {
  return (
    <Container maxWidth="sm" style={styles}>
      <h1>Character Counter</h1>
      <CharacterCount />
    </Container> 

  );
}

export default App;
