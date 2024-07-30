import './App.css';
import { Container } from '@mui/material';
import { FirstRow } from './components/first-row';
import { SecondRow } from './components/second-row';
import { FourthRow } from './components/fourth-row';
import { ThirdRow } from './components/third-row';

const App = () => {
  return (
    <Container sx={{ bgcolor: 'black', height: '100%' }}>
      <FirstRow />
      <SecondRow />
      <ThirdRow />
      <FourthRow />
    </Container>
  );
};

export default App;
