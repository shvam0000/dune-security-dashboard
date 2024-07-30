import './App.css';
import { Container } from '@mui/material';
import { FirstRow } from './components/first-row';
import { SecondRow } from './components/second-row';

const App = () => {
  return (
    <Container sx={{ bgcolor: 'black', height: '100%', width: '100vw' }}>
      <FirstRow />
      <SecondRow />
    </Container>
  );
};

export default App;
