import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Welcome from './components/Welcome/Welcome';
import Courier from './components/Courier/Courier';
import Customer from './components/Customer/Customer';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route index element={<Welcome /> } />
                <Route path="courier" element={<Courier />} />
                <Route path="customer" element={<Customer />} />
            </Routes>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
