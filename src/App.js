import './App.css'
import Home from './pages/Home';
import Weather from "./Weather";
import {Routes,Route} from 'react-router-dom'


function App() {
  return (
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/weather' element={<Weather />} />
    </Routes>
      
  );
}

export default App;
