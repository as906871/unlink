import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dasboard';
import Rockets from './pages/Rocket';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/rockets" element={<Rockets />} />
      </Routes>
    </Router>
  );
}

export default App;