import './App.css';
import NavigationBar from './components/NavigationBar';
import Auth from './pages/Auth';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
         <BrowserRouter>
        <NavigationBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<div align="left" style={{padding: '20px'}}>About</div>} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
