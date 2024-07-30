import './App.css';
import { Container } from '@mui/material';
import { FirstRow } from './components';

const App = () => {
  return (
    <Container sx={{ bgcolor: 'black', height: '100vh' }}>
      <FirstRow />
    </Container>
  );
};

export default App;
