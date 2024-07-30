import './App.css';
import { Container } from '@mui/material';
import { FirstRow } from './components/first-row';
import { SecondRow } from './components/second-row';
import { FourthRow } from './components/fourth-row';

const App = () => {
  return (
    <Container sx={{ bgcolor: 'black', height: '100%' }}>
      <FirstRow />
      <SecondRow />
      <FourthRow />
    </Container>
  );
};

export default App;
