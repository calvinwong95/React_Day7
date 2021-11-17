
import './App.css';
import Login from './Login';
import Register from './Register';
import Homepage from './Homepage';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      

      <Routes  basename = {process.env.PUBLIC_URL}>
      <Route path="/" element={<Login/>} />
      <Route path="/register" exact element={<Register/>} />
      <Route path="/homepage" exact element={<Homepage/>} />
      </Routes>
    </Router>
    
  );
}

export default App;
