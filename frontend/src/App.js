import { Routes,Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Addtask from './components/Addtask';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/add" element={<Addtask/>}/>
    </Routes>
    </div>
  );
}

export default App;
